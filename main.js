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
    
    let link_css = document.createElement('link')
    switch (name) {
        case 'news':
            link_css.id = 'news.css'
            link_css.rel = 'stylesheet'
            link_css.href = 'news/news.css'
            
            document.getElementById('linkTemplate').appendChild(link_css)
            preview.innerHTML = loadHTML('news')
            break;

        case 'char':
            link_css.id = 'char.css'
            link_css.rel = 'stylesheet'
            link_css.href = 'char/char.css'
            
            head.appendChild(link_css)
            preview.innerHTML = loadHTML('char')
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
        
    previewContent.classList.remove('scale')
    domtoimage.toPng(previewContent)
        .then(function (dataUrl) {
            // var img = new Image();
            // img.src = dataUrl;
            // document.body.appendChild(img);

            modal_preview_body.innerHTML = `<img class='img-fluid' src='${dataUrl}'>`
            previewContent.classList.add('scale')
        })
        .catch(function (error) {
            console.error('oops, something went wrong!', error);
        });
}
// function download(){
//     preview()

//     let date = new Date(),
//         dateFormat = date.getDate() + '' + date.getMonth() + '' + date.getFullYear(),
//         fileName = document.querySelector('p.judul-content').innerHTML.replace(/\s+/g, '').toUpperCase() + '_' + dateFormat
        
//     // return;
//     domtoimage.toBlob(previewContent)
//         .then(function (blob){
//             window.saveAs(blob, fileName + '.png')
//         })
// }