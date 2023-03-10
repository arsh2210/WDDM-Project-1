function loadData(file) {
  var reader = new FileReader();
  reader.addEventListener('load', function() {
    var result = JSON.parse(reader.result);
    console.log(result);
    console.log(result.name);
    console.log(result.age);
    console.log(result.occupation);
  });
  reader.readAsText(file);
}

function createJsonFile(data) {
  var newJsonData = JSON.stringify(data);
  var file = new File([newJsonData], "newdata.json", { type: "application/json;charset=utf-8" });
  var link = document.createElement('a');
  link.href = window.URL.createObjectURL(file);
  link.download = file.name;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  console.log('New data written to file');
}

function uploadFile(event) {
  var files = event.target.files;
  for (var i = 0; i < files.length; i++) {
    var file = files[i];
    if (file.type.match('json')) {
      loadData(file);
      const newData = {
        name: "Rubal Kumar",
        age: 22,
        email: "rubalkumar97@gmail.com"
      };
      console.log(newData);
      createJsonFile(newData);
    }
  }
}

window.addEventListener('load', function() {
  var upload = document.getElementById('fileInput');
  if (upload) {
    upload.addEventListener('change', uploadFile);
  }
});
