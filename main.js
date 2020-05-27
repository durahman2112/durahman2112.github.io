let nowTemplate,
    previewContent

changeTemplate('news')

function changeTemplate(name) {
    let head = document.head,
        preview = document.getElementById('preview')
    
    if(nowTemplate == name){
        return;
    }
    nowTemplate = name
    console.log(head, nowTemplate);
    
    switch (name) {
        case 'news':
            let link_css = document.createElement('link')

            link_css.id = 'news.css'
            link_css.rel = 'stylesheet'
            link_css.href = 'news/news.css'
            
            head.appendChild(link_css)
            preview.innerHTML = loadHTML('news')
            break;
    
        default:
            break;
    }
}
function preview_image(event, output){
    let reader = new FileReader(),
        outputE = document.querySelector(output)
    reader.onload = function(){
        outputE.src = reader.result
    }
    reader.readAsDataURL(event.target.files[0])
}
function preview(){
    console.log('preview');
    let formElems = document.querySelectorAll('#form input, textarea')
    for (let i = 0; i < formElems.length; i++) {
        let e = formElems[i],
            previewE = document.querySelector('#preview .' + e.id)
        
        if(e.type != 'file'){
            previewE.innerHTML = e.value   
        }
    }
    
    // return ;
    previewContent = document.querySelector('#preview > div')

    let modal_preview = document.getElementById('modal_preview'),
        modal_preview_body = modal_preview.getElementsByClassName("modal-body")[0]
        
    domtoimage.toPng(previewContent)
        .then(function (dataUrl) {
            // var img = new Image();
            // img.src = dataUrl;
            // document.body.appendChild(img);

            modal_preview_body.innerHTML = `<img class='img-fluid' src='${dataUrl}'>`
        })
        .catch(function (error) {
            console.error('oops, something went wrong!', error);
        });
}
function download(){
    preview()

    let date = new Date(),
        dateFormat = date.getDate() + '-' + date.getMonth() + '-' + date.getFullYear() + '-' + date.getHours() + '-' + date.getMinutes()
        
    domtoimage.toBlob(previewContent)
        .then(function (blob){
            window.saveAs(blob, dateFormat + '.png')
        })
}