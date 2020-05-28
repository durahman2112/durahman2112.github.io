let nowTemplate,
    previewContent

changeTemplate('news/news')

function add_link_css(name) {
    let linkTemplate = document.getElementById('linkTemplate'),
        link = document.createElement('link')

    link.id = name + '.css'
    link.rel = 'stylesheet'
    link.href = link.id
    
    linkTemplate.innerHTML = ''
    linkTemplate.appendChild(link)
}
function changeTemplate(name) {
    let preview = document.getElementById('preview'),
        input_file
    
    if(nowTemplate == name){
        return;
    }
    nowTemplate = name
    add_link_css(name)
    preview.innerHTML = loadHTML(name)
    preview.children[0].classList.add('scale')

    input_file = document.querySelectorAll("#preview input[type='file']")
    
    input_file.forEach(e => {
        if(e !== null){
            e.accept = 'image/*'
                if(input_file.length == 1){
                    e.onchange = function (){preview_image(event)}
                }else{
                    e.onchange = function(){preview_images(event, e.id)}
                }
            }
        })

    console.log(linkTemplate, nowTemplate);
}
function preview_image(event){
    let reader = new FileReader(),
        outputE = document.querySelectorAll('#preview img.replace')

    reader.onload = function(){
        outputE.forEach(e => {
            e.src = reader.result
        })
    }
    reader.readAsDataURL(event.target.files[0])
}
function preview_images(event, output){
    let reader = new FileReader(),
        outputE = document.querySelector('#preview img.' + output)

        console.log('#preview img.' + output, outputE);
        
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
        
            console.log(e, previewE);
            
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