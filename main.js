let nowTemplate

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
        modal_preview_body = modal_preview.getElementsByClassName("modal-body")[0]
        
    text.innerHTML = input.value
    console.log(input, text, document.querySelector("#preview > div"));

    var node = document.querySelector("#preview > div");

    console.log('node:', node);
    
    // html2canvas(node).then(canvas => {
    //     document.body.appendChild(canvas)
    // });
    // html2canvas(document.querySelector("#preview > div")).then(canvas => {
    //     document.body.appendChild(canvas)
    // });
    html2canvas(node).then(function(canvas) {
        modal_preview_body.innerHTML = ''
        console.log(canvas.classList += ' img-fluid');
        
        modal_preview_body.appendChild(canvas);
    });
    
    // domtoimage.toPng(node)
    //     .then(function (dataUrl) {
    //         var img = new Image();
    //         img.src = dataUrl;
    //         // document.body.appendChild(img);

    //         modal_preview_body.innerHTML = `<img class='img-fluid' src='${dataUrl}'>`
    //     })
    //     .catch(function (error) {
    //         console.error('oops, something went wrong!', error);
    //     });
}