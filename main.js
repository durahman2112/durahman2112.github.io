let nowTemplate

function loadHTML(name) {
    switch (name) {
        case 'home':            
            return `
            <div class="cover">
                <div class="gambar">
                    <img src="news/kny.jpg" alt="" srcset="">
                </div>
                <div class="footer">

                </div>
                <div class="white-box"></div>
                <p id="title" class="title">
                        MANGA ENEN NO SHOUBOUTAI SUDAH MENDEKATI AKHIR
                </p>
                <p class="desc">
                    Meski dalam wabah COVID-19, produksi film terbaru Hayao Mizaki, ‘Kimitachi wa dou Ikiru Ka’ tetap berlanjut dari kabaran sudah berjalan 36 menit, ditargetkan selesai 3 tahun mendatang
                </p>
                <div class="bg-judul-content"></div>
                <p class="judul-content">
                    n e w s
                </p>
                <p class="lensa">
                    lensa.animeme
                </p>
                <p class="follow">
                    follow for more anime content!
                </p>
                <p class="admin">
                    by hoshi
                </p>
                <div class="icon">
                    <img src="icon.png" alt="" srcset="">
                </div>
                <div class="linebreak">

                </div>
                <div class="bulet">
                    <img src="bulet.png" alt="">
                </div>
                <div class="logo">
                    <img src="logo.png" alt="" srcset="">
                </div>

            </div>
            `
            break;
    
        default:
            break;
    }
}
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
        case 'home':
            let link_css = document.createElement('link')

            link_css.id = 'news.css'
            link_css.href = 'news/news.css'
            link_css.rel = 'stylesheet'
            
            head.appendChild(link_css)
            preview.innerHTML = loadHTML('home')

            let container = preview.children[0]
            container.style = `
                -webkit-transform: scale(.366);
                -ms-transform: scale(.366);
                transform: scale(.366);
                translate: -352px -352px;
            `
            break;
    
        default:
            break;
    }
}
function preview(caller){
    let e = document.getElementById('ipt_title')
    document.querySelector('.preview .title').innerHTML = e.value
    console.log(e);

    document.querySelector("#preview .cover").style = ''
    html2canvas(document.querySelector("#preview .cover")).then(canvas => {
        document.body.appendChild(canvas)
    })
    document.querySelector("#preview .cover").style = `
        -webkit-transform: scale(.366);
        -ms-transform: scale(.366);
        transform: scale(.366);
        translate: -352px -352px;
    `
    
}