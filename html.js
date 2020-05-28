function loadHTML(name) {
    switch (name) {
    // news/
        case 'news/news':            
            return `
        <div class="cover">
            <div class="gambar">
                <img class="replace" src="news/kny.jpg" alt="" srcset="" style="background-position: center;background-size: cover;">
            </div>
            <img class="footer" src="blur/blur.png">
<!--             <div class="footer">
    
            </div> -->
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
                by <span class="author">hoshi</span>
            </p>
            <div class="icon">
                <img src="news/icon.png" alt="" srcset="">
            </div>
            <div class="linebreak">
    
            </div>
            <div class="bulet">
                <img src="news/bulet.png" alt="">
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
                <label for="desc">News nya</label>
                <textarea class="form-control" id="desc"></textarea>
            </div>
            
            <div class="form-group">
                <label for="gambar">Pilih gambar</label>
                <input type="file" class="form-control-file" id="gambar">
            </div>
            <div class="form-group">
                <label for="author">Admin</label>
                <input type="test" class="form-control" id="author">
                <!-- <small class="form-text text-muted">Pakai 'BY' dulu lalu nama admin</small> -->
            </div>
        </form>
            `
            break;

    //poster/
        case 'poster/poster':
            return `
            <div class="cover">
                <div class="img-bg">
                    <img src="poster/poster.jpeg" alt="" srcset="">
                </div> 
               <img src="blur/blur-poster.png" alt="" class="box-blur">
                <div class="img-content">
                    <img class="replace"  src="poster/poster.jpeg" alt="" srcset="">
                </div>
                <div class="news-logo">
                    <img src="poster/news-logo.png" alt="" srcset="">
                </div>
                <div class="logo-lensa">
                    <img src="poster/logo-lensa.png" alt="" srcset="">
                </div>
                <p class="lensa">
                    lensa animeme
                </p>
                <div class="line-1"></div>
                <p class="follow">
                    follow for more anime content
                </p> 
                <p class="admin">by <span class="author">hoshi</span></p>
                <img src="poster/icon.png" class="icon" alt="" srcset="">
                <div class="box-putih"></div>
                <div class="line-2"></div>
                <p class="title-news">POSTER TERBARU ANIME YAKUSOKU NO NEVERLAND</p>
                <p class="desc-news">Meski dalam wabah COVID-19, produksi film terbaru Hayao Mizaki, ‘Kimitachi wa dou Ikiru Ka’ tetap berlanjut dari kabaran sudah berjalan 36 menit, ditargetkan selesai 3 tahun mendatang</p>
                <img src="poster/Union.png" alt="" class="bulat">
            </div>
    <br>
            <form action="" id="form">
                <div class="form-group">
                    <label for="title-news">Judul News</label>
                    <input type="text" class="form-control" id="title-news">
                </div>
                <div class="form-group">
                    <label for="desc-news">News nya</label>
                    <textarea class="form-control" id="desc-news"></textarea>
                </div>
                
                <div class="form-group">
                    <label for="img-content">Pilih gambar Poster</label>
                    <input type="file" class="form-control-file" id="img-content" >
                </div>
                <div class="form-group">
                    <label for="author">Admin</label>
                    <input type="test" class="form-control" id="author">
                </div>
            </form>
            `
            break;

    // fakta/
        case 'fakta/fakta':
            return `
            <div class="cover">
                <div class="gambar">
                    <img class="replace" src="fakta/tgk.jpg" alt="" srcset="">
                </div>
                <img src="blur/blur.png" alt="" class="footer">
                <div class="white-box"></div>
                <p class="title">
                    kimetsu no yaiba
                </p>
                <p class="desc">
                    Meski dalam wabah COVID-19, produksi film terbaru Hayao Mizaki, ‘Kimitachi wa dou Ikiru Ka’ tetap berlanjut dari kabaran sudah berjalan 36 menit, ditargetkan selesai 3 tahun mendatang
                </p>
                <div class="bg-judul-content"></div>
                <p class="judul-content">
                    fakta
                </p>
                <p class="lensa">
                    lensa.animeme
                </p>
                <p class="follow">
                    follow for more anime content!
                </p>
                <p class="admin">
                    by <span class="author">hoshi</span>
                </p>
                <div class="icon">
                    <img src="fakta/icon.png" alt="" srcset="">
                </div>
                <div class="linebreak">
        
                </div>
                <div class="bulet">
                    <img src="fakta/bulet.png" alt="">
                </div>
                <div class="logo">
                    <img src="logo.png" alt="" srcset="">
                </div>
        
            </div>
            <br>
    
            <form action="" id="form">
                <div class="form-group">
                    <label for="title">Judul Anime</label>
                    <input type="text" class="form-control" id="title">
                </div>
                <div class="form-group">
                    <label for="desc">Faktanya</label>
                    <textarea class="form-control" id="desc"></textarea>
                    <small class="form-text text-muted">Silahkan sebutkan faktanya, pastikan kebenarannya ya :V</small>
                </div>
                
                <div class="form-group">
                    <label for="gambar">Pilih gambar</label>
                    <input type="file" class="form-control-file" id="gambar" >
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Admin</label>
                    <input type="test" class="form-control" id="author">
                    <small class="form-text text-muted">Pakai 'BY' dulu lalu nama admin</small>
                </div>
            </form>
            `
            break;

    // meme/
        case 'meme/meme':
            return `
            <div class="cover">
                <div class="gambar">
                    <img class="replace" src="meme/gambar.png" alt="" srcset="">
                </div>
                <img src="blur/blur.png" alt="" class="footer">
                <!-- <img src="meme/kny.jpg" alt="" class="img-content replace"> -->
                <p class="lensa">
                    lensa.animeme
                </p>
                <p class="follow">
                    follow for more anime content!
                </p>
                <p class="admin">
                   by <span class="author">hoshi</span>
                </p>
                <div class="icon">
                    <img src="meme/icon.png" alt="" srcset="">
                </div>
                <div class="linebreak">
        
                </div>
                <div class="logo">
                    <img src="meme/logo.png" alt="" srcset="">
                </div>
        
            </div>
    
            <br>
    
            <form action="" id="form">
                <div class="form-group">
                    <label for="gambar">Pilih gambar</label>
                    <input type="file" class="form-control-file" id="gambar" >
                </div>
                <div class="form-group">
                    <label for="author">Admin</label>
                    <input type="test" class="form-control" id="author">
                </div>
            </form>
            `
            break;

    // char/
        case 'char/cover':
            return `
            <div class="cover">
                <div class="gambar">
                    <img src="char/poster.jpeg" alt="" srcset="">
                </div>
                <div class="footer">
        
                </div>
                <img src="char/char.png" alt="" class="img-char replace">
                <div class="white-box"></div>
                <p class="nama">
                    sato Mafuyu
                </p>
                <p class="judul-anime">
                    given
                </p>
                <p class="kanji">
                    佐藤 真冬
                </p>
            <div class="linename"></div>
                <p class="jk">Male</p>
                <p class="tgl">February 28</p>
                <p class="age">
                    18 Y.O
                </p>
                <p class="tall">173cm</p>
                <p class="seiyuu">Yano Shougo</p>
                <div class="bg-judul-content"></div>
                <p class="judul-content">
                    lensachar
                </p>
                <p class="lensa">
                    lensa.animeme
                </p>
                <p class="follow">
                    follow for more anime content!
                </p>
                <p class="admin">
                    by <span class="author">hoshi</span>
                </p>
                <div class="icon">
                    <img src="char/icon-white.png" alt="" srcset="">
                </div>
                <div class="linebreak">
        
                </div>
        
                <div class="bulet">
                    <img src="char/bulet-white.png" alt="">
                </div>
                <div class="logo">
                    <img src="char/logo.png" alt="" srcset="">
                </div>
        
                <div class="node-1"></div>
                <div class="node-2"></div>
                <div class="node-3"></div><div class="node-4"></div>
        
            </div>
    <br>
    
            <form action="" id="form">
                <div class="form-group">
                    <label for="nama">Nama</label>
                    <input type="text" class="form-control" id="nama">
                </div>
                <div class="form-group">
                    <label for="judul-anime">Anime</label>
                    <input type="text" class="form-control" id="judul-anime">
                </div>
                <div class="form-group">
                    <label for="kanji">Kanji</label>
                    <input type="text" class="form-control" id="kanji">
                </div>
                <div class="form-group">
                    <label for="jk">Jenis Kelamin</label>
                    <input type="text" class="form-control" id="jk">
                    <small class="form-text text-muted">Male / Female</small>
                </div>
                <div class="form-group">
                    <label for="tgl">Birthday</label>
                    <input type="text" class="form-control" id="tgl">
                    <small class="form-text text-muted">example : December 21</small>
                </div>
                <div class="form-group">
                    <label for="age">Umur</label>
                    <input type="text" class="form-control" id="age">
                    <small class="form-text text-muted">example : 18 Y.O</small>
                </div>
                <div class="form-group">
                    <label for="tall">Tinggi</label>
                    <input type="text" class="form-control" id="tall">
                    <small class="form-text text-muted">example : 173 cm</small>
                </div>
                <div class="form-group">
                    <label for="seiyuu">Seiyuu</label>
                    <input type="text" class="form-control" id="seiyuu">
                </div>
                <div class="form-group">
                    <label for="gambar">Pilih gambar</label>
                    <input type="file" class="form-control-file" id="gambar" >
                </div>
                <div class="form-group">
                    <label for="author">Admin</label>
                    <input type="test" class="form-control" id="author">
                    <!-- <small id="emailHelp" class="form-text text-muted">Pakai 'BY' dulu lalu nama admin</small> -->
                </div>
            </form>
            `
            break;

        case 'char/char-desc':
            return `
            <div class="cover">
                <div class="gambar">
                    <img src="char/char-desc.jpeg" alt="" srcset="">
                </div>
                <div class="footer">
        
                </div>
                <div class="gambar-content">
                    <img class="img-char replace" src="char/char-desc.jpeg" alt="" srcset="">
                </div>
                <div class="white-box"></div>
                <p class="nama">
                    Nama karakter
                </p>
                <p class="desc-char">
                    Meski dalam wabah COVID-19, produksi film terbaru Hayao Mizaki, ‘Kimitachi wa dou Ikiru Ka’ tetap berlanjut dari kabaran sudah berjalan 36 menit, ditargetkan selesai 3 tahun mendatangMeski dalam wabah COVID-19, produksi film terbaru Hayao Mizaki, ‘Kimitachi wa dou Ikiru Ka’ tetap 
                </p>
                <div class="bg-judul-content"></div>
                <p class="judul-content">
                    lensachar
                </p>
                <p class="lensa">
                    lensa.animeme
                </p>
                <p class="follow">
                    follow for more anime content!
                </p>
                <p class="admin">
                    by <span class="author">hoshi</span>
                </p>
                <div class="icon">
                    <img src="char/icon-white.png" alt="" srcset="">
                </div>
                <div class="linebreak">
        
                </div>
                <div class="bulet">
                    <img src="char/bulet.png" alt="">
                </div>
                <div class="logo">
                    <img src="char/logo.png" alt="" srcset="">
                </div>
        
            </div>
    
        <br>
            <form action="" id="form">
                <div class="form-group">
                    <label for="nama">Nama Karakter</label>
                    <input type="text" class="form-control" id="nama">
                </div>
                <div class="form-group">
                    <label for="desc-char">Deskripsi Karakter</label>
                    <textarea class="form-control" id="desc-char"></textarea>
                </div>
                
                <div class="form-group">
                    <label for="gambar">Pilih gambar</label>
                    <input type="file" class="form-control-file" id="gambar">
                </div>
                <div class="form-group">
                    <label for="author">Admin</label>
                    <input type="test" class="form-control" id="author">
                    <!-- <small id="emailHelp" class="form-text text-muted">Pakai 'BY' dulu lalu nama admin</small> -->
                </div>
            </form>
            `
            break;

        case 'char/quote':
            return `
            <div class="cover">
                <img src="char/IMG_20200523_222055-removebg-preview.png" alt="" class="img-char replace">
                <div class="white-box"></div>
                <p class="kutip">"</p>
                <p class="nama">
                    sato Mafuyu
                </p>
                <p class="judul-anime">
                    given
                </p>
                <p class="quote"> Meski dalam wabah COVID-19, produksi film terbaru Hayao Mizaki, ‘Kimitachi wa dou Ikiru Ka’ tetap berlanjut dari kabaran sudah berjalan 36 menit, ditargetkan selesai 3 tahun mendatangMeski dalam wabah COVID-19, produksi film terbaru Hayao Mizaki, ‘Kimitachi wa dou Ikiru Ka’ tetap </p>
                <div class="bg-judul-content"></div>
                <p class="judul-content">
                    lensachar
                </p>
                <p class="lensa">
                    lensa.animeme
                </p>
                <p class="admin">
                    by <span class="author">dun</span>
                </p>
                <div class="icon">
                    <img src="char/icon-black.png" alt="" srcset="">
                </div>
                <div class="linebreak">
        
                </div>
        
                <div class="bulet">
                    <img src="char/bulet.png" alt="">
                </div>
                <div class="logo">
                    <img src="char/logo.png" alt="" srcset="">
                </div>
        
                <div class="node-1"></div>
                <div class="node-2"></div>
                <div class="node-3"></div><div class="node-4"></div>
        
            </div>
    
    
            <br>
            <form action="" id="form">
                <div class="form-group">
                    <label for="nama">Nama Karakter</label>
                    <input type="text" class="form-control" id="nama">
                </div>
                <div class="form-group">
                    <label for="judul-anime">Anime</label>
                    <input type="text" class="form-control" id="judul-anime">
                </div>
                <div class="form-group">
                    <label for="quote">Deskripsi Karakter</label>
                    <textarea class="form-control" id="quote"></textarea>
                </div>
                
                <div class="form-group">
                    <label for="img-char">Pilih gambar</label>
                    <input type="file" class="form-control-file" id="img-char" >
                    <small class="form-text text-muted">Diharuskan gambar PNG yang transparan ya gaes!</small>
                </div>
                <div class="form-group">
                    <label for="author">Admin</label>
                    <input type="test" class="form-control" id="author">
                    <small class="form-text text-muted">Pakai 'BY' dulu lalu nama admin</small>
                </div>
            </form>
            `
            break;
    
        default:
            break;
    }
    // accept="image/*" 
    // onchange="preview_image(event, 'img.img-char')"
}