<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
	<h1>推流Demo</h1>
	<div class="m-input">
	    <span class="u-input-name">摄像头：</span>
	    <select class="u-input" id="cameraSelect">
	    </select>
	</div>
	<div class="m-input">
	    <span class="u-input-name">麦克风：</span>
	    <select class="u-input" id="microPhoneSelect">
	    </select>
	</div>
	<div class="m-input">
	    <span class="u-input-name">清晰度：</span>
	    <select class="u-input" id="qualitySelect">
	        <option value="0">流畅（480*360@20）</option>
	        <option value="1">标清（640*480@20）</option>
	        <option value="2">高清（960*540@20）</option>
	    </select>
	</div>
	<div class="m-input">
	    <span class="u-input-name">推流地址：</span>
	    <input class="u-input" type="text" id="publishUrl">
	</div>
	<div class="m-input">
	    <button class="button button-primary button-rounded testBtn" id="previewBtn" onclick="startPreview()">预览</button>
	    <button class="button button-primary button-rounded testBtn" id="publishBtn" onclick="startPublish()">开始直播</button>
	    <span class="u-status"></span>
	</div>
	<object width="862" height="486" id="my-publisher" type="application/x-shockwave-flash" data="./publisher-ebd4e1deba.swf" style="visibility: visible;"><param name="wmode" value="transparent"><param name="allowFullScreen" value="true"><param name="allowScriptAccess" value="always"><param name="quality" value="high"><param name="align" value="middle"><param name="flashvars" value="id=100&width=862&height=486&js_bridge_method=nePublisher.js_bridge_message"></object>
  </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){return{}},
  mounted() {
	const s = document.createElement('script');
	s.type = 'text/javascript';
	s.src = './nePublisher.min.js';
	document.body.appendChild(s);
  	const s1 = document.createElement('script');
  	s1.type = 'text/javascript';
  	s1.src = './index.js';
  	document.body.appendChild(s1);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	@import "../../public/buttons.css";
</style>
