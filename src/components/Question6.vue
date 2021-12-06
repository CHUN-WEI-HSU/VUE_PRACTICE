<template>
  <div id="que6-wrapper">
    <h4>說明:可以開啟console查看file的變化，原理是透過canvas等比例縮小圖片長寬後輸出</h4>
    <input type="file" accept="image/png, image/jpeg" @change="fileSelected">
  </div>
</template>

<script>
export default {
  name: 'Question6',
  props: {
  },
  methods: {
    fileSelected(evt){
      const file = evt.target.files.item(0)
      if(file){
        const settings = {
          file: file,
          maxSize: 500 //長或寬
        }
        alert(`原size:${Math.floor(file.size/1024)}KB`)
        console.log('壓縮前file', file)

        this.resizeImage(settings).then(blob => {
          alert(`修改後size:${Math.floor(blob.size/1024)}KB`)
          console.log('壓縮後file', this.blobToFile(blob, file.name))
        })
      }
    },
    blobToFile(theBlob, fileName){
        theBlob.lastModifiedDate = new Date();
        theBlob.name = fileName;
        return theBlob;
    },
    resizeImage(settings) {
        var file = settings.file;
        var maxSize = settings.maxSize;
        var reader = new FileReader();
        var image = new Image();
        var canvas = document.createElement('canvas');
        var dataURItoBlob = function (dataURI) {
            var bytes = dataURI.split(',')[0].indexOf('base64') >= 0 ?
                atob(dataURI.split(',')[1]) :
                unescape(dataURI.split(',')[1]);
            var mime = dataURI.split(',')[0].split(':')[1].split(';')[0];
            var max = bytes.length;
            var ia = new Uint8Array(max);
            for (var i = 0; i < max; i++)
                ia[i] = bytes.charCodeAt(i);
            return new Blob([ia], { type: mime });
        };
        var resize = function () {
            var width = image.width;
            var height = image.height;
            if (width > height) {
                if (width > maxSize) {
                    height *= maxSize / width;
                    width = maxSize;
                }
            } else {
                if (height > maxSize) {
                    width *= maxSize / height;
                    height = maxSize;
                }
            }
            canvas.width = width;
            canvas.height = height;
            canvas.getContext('2d').drawImage(image, 0, 0, width, height);
            var dataUrl = canvas.toDataURL('image/jpeg');
            return dataURItoBlob(dataUrl);
        };
        return new Promise(function (ok, no) {
            if (!file.type.match(/image.*/)) {
                no(new Error("Not an image"));
                return;
            }
            reader.onload = function (readerEvent) {
                image.onload = function () { return ok(resize()); };
                image.src = readerEvent.target.result;
            };
            reader.readAsDataURL(file);
        });
    }
  },  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  #que6-wrapper{
    padding-top: 10px;
  }
</style>
