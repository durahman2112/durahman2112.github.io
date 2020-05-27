let nowTemplate

changeTemplate('news')

function changeTemplate(name) {
    let head = document.head,
        preview = document.getElementById('preview'),
        storage = document.getElementById('storage')
    
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
function preview(ipt, txt){
    console.log('preview');

    let input = document.querySelector('#form '+ipt),
        text = document.querySelector('#preview '+txt),
        modal_preview = document.getElementById('modal_preview'),
        modal_preview_body = modal_preview.getElementsByClassName("modal-body")[0],
        node = document.querySelector("#preview > div")
        
    text.innerHTML = input.value
    console.log('node:', node);
    
    domtoimage.toPng(node)
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
    let date = new Date(),
        dateFormat = date.getDate() + '-' + date.getMonth() + '-' + date.getFullYear() + '-' + date.getHours() + '-' + date.getMinutes()
    domtoimage.toBlob(document.querySelector('#preview > div'))
        .then(function (blob){
            window.saveAs(blob, dateFormat + '.png')
        })
}