function loadHTML(name) {
    switch (name) {
        case 'news':            
            return `
            <div class="cover">
            <div class="gambar">
                <img src="news/kny.jpg" alt="" srcset="">
            </div>
            <div class="footer">
    
            </div>
            <div class="white-box"></div>
            <p class="title">
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
<br>
        <form action="" id="form">
            <div class="form-group">
                <label for="title">Judul News</label>
                <input type="text" class="form-control" id="title">
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1">News nya</label>
                <textarea class="form-control" id="exampleInputPassword1"></textarea>
            </div>
            
            <div class="form-group">
                <label for="exampleInputEmail1">Pilih gambar</label>
                <input type="file" class="form-control-file" id="exampleFormControlFile">
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Admin</label>
                <input type="test" class="form-control" id="exampleInputPassword1">
                <small class="form-text text-muted">Pakai 'BY' dulu lalu nama admin</small>
            </div>
        </form>
        <button class="btn btn-primary" onclick="preview('#title', '.title')">
            <i class="fas fa-eye fa-sm"></i>
            &nbsp;Preview
        </button>
        <button class="btn btn-outline-success" onclick="()">
            <i class="fas fa-download"></i>
            &nbsp;Download
        </button>
            `
            break;
    
        default:
            break;
    }
}