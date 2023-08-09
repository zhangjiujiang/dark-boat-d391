/*
1.在cloudflare建立一个反代worker，并且绑定yumi域名。 例如:  images.yumi.io
2.通过images.yumi.io 传入图片参数信息。主要包含源url地址，裁切参数，以及质量参数
3.worker得到url，将图片反代回cloudflare并且直接进行存储。（缓存时间不应低于7天）
4.worker先从缓存中判断是否有资源，如果有资源则从缓存中直接取出资源，根据参数处理后，直接返回。
5.如果缓存没有，先反代取回进行缓存，再取出处理后返回

tips
1. 确保有压缩模块，可以通过图片大小之类直接确定是否压缩，压缩等级 0-100/auto
2. 确保有尺寸裁切模块。
3. 可以添加gif处理模块，如果没有，则需要判断，避免gif压缩后不动。
*/
var src_default = {
	async fetch(request) {
	  const url = new URL(request.url);
	  if (url.searchParams.has("image")){
		request = new Request(new URL(url.searchParams.get("image")), request);
	  }else{
		return new Response('Missing "image" value', { status: 400 })
	  }
	  let options = { cf: { image: {} } };
	  let flag = false;
	  if (url.searchParams.has("fit"))
		options.cf.image.fit = url.searchParams.get("fit");
	  if (url.searchParams.has("width")) {
		options.cf.image.width = url.searchParams.get("width");
		flag = true;
	  }
	  if (url.searchParams.has("height")) {
		options.cf.image.height = url.searchParams.get("height");
		flag = true;
	  }
	  if (url.searchParams.has("quality"))
		options.cf.image.quality = url.searchParams.get("quality");
	  const accept = request.headers.get("Accept") ?? "";
	  if (accept && /image\/avif/.test(accept)) {
		options.cf.image.format = "avif";
		flag = true;
	  } else if (accept && /image\/webp/.test(accept)) {
		options.cf.image.format = "webp";
		flag = true;
	  }
	  const cacheKey = request.url + "new";
	  options.cf = {
		cacheTtl: 86401,
		cacheEverything: true,
		cacheKey,
		...flag ? options.cf : {}
	  };
	  let response = await fetch(request, {
		cf: {
		  cacheTtl: 10080,
		  cacheEverything: true,
		  cacheKey
		}
	  });
	  if (response.headers.get("content-type") !== "image/gif") {
		response = await fetch(request, options);
	  }
	  response = new Response(response.body, response);
	  response.headers.set("Content-Security-Policy", "default-src: 'self';");
	  response.headers.set("Access-Control-Allow-Origin", "*");
	  return response;
	}
  };
  export {
	src_default as default
  };
  //# sourceMappingURL=index.js.map
  