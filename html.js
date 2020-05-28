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
    
    // list
        case 'list/cover-list':
            return `
            <div class="cover">
                <div class="gambar">
                    <img class="replace" src="list/img.jpeg" alt="" srcset="">
                </div>
                <img src="blur/blur.png" alt="" class="footer">
                <div class="white-box"></div>
                <p class="rekomendasi">Rekomendasi</p>
                <p class="title">
                    kimetsu no yaiba
                </p>
                <p class="desc">
                    Kisah para anak manusia yang dijadikan makanan 
                </p>
                <div class="bg-judul-content"></div>
                <p class="judul-content">
                    rekomendasi
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
                    <img src="list/icon-white.png" alt="" srcset="">
                </div>
                <div class="linebreak">
        
                </div>
                <div class="bulet">
                    <img src="list/bulet.png" alt="">
                </div>
                <div class="logo">
                    <img src="list/logo.png" alt="" srcset="">
                </div>
        
            </div>
            <br>
    
            <form action="" id="form">
                <div class="form-group">
                    <label for="rekomendasi">Isi ini Rekomendasi / Daftar</label>
                    <input type="text" class="form-control" id="rekomendasi">
                </div>
                <div class="form-group">
                    <label for="title">Judul List</label>
                    <input type="text" class="form-control" id="title">
                </div>
                <div class="form-group">
                    <label for="desc">Deskripsi singkat!!</label>
                    <input type="text" class="form-control" id="desc">
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
        case 'list/list':
            return `
            <div class="cover">
                <div class="gambar">
                    <img src="list/img.jpeg" alt="" srcset="">
                </div>
               <img src="blur/blur.png" alt="" class="footer">
                <div class="white-box"></div>
                <img src="list/img.jpeg" alt="" class="img-content replace">
                <p class="rekomendasi">Rekomendasi</p>
                <p class="title">
                    kimetsu no yaiba
                </p>
                <p class="genre">
                    Comedy, Slice of life, adventure, horror 
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
                    <img src="list/icon-white.png" alt="" srcset="">
                </div>
                <div class="linebreak">
        
                </div>
                <div class="bulet">
                    <img src="list/bulet.png" alt="">
                </div>
                <div class="logo">
                    <img src="list/logo.png" alt="" srcset="">
                </div>
        
            </div><br>
    
    
            <form action="" id="form">
                <div class="form-group">
                    <label for="title">Judul Anime</label>
                    <input type="text" class="form-control" id="title">
                </div>
                <div class="form-group">
                    <label for="genre">Genre</label>
                    <input type="text" class="form-control" id="genre">
                </div>
                
                <div class="form-group">
                    <label for="gambar">Pilih gambar</label>
                    <input type="file" class="form-control-file" id="gambar">
                </div>
                <div class="form-group">
                    <label for="author">Admin</label>
                    <input type="test" class="form-control" id="author">
                </div>
            </form>
            `
            break;

    // music/
        case 'music/music':
            return `
            <div class="cover">
                <div class="white-circle"></div>
                <img class="img-music replace" src="music/Cover.jpg" alt="" srcset="">
                <p class="singer">Aimer</p>
                <p class="title">
                    Torches
                </p>
                <p class="anime">
                    Vinland Saga
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
                    <img src="music/icon-black.png" alt="" srcset="">
                </div>
                <div class="line">
        
                </div>
                <div class="bulet">
                    <img src="music/bulet.png" alt="">
                </div>
                <div class="logo">
                    <img src="music/logo.png" alt="" srcset="">
                </div>
        
            </div>
        </div><br>
        <div class="container">
            <form action="" id="form">
                <div class="form-group">
                    <label for="title">Judul</label>
                    <input type="text" class="form-control" id="title">
                </div>
                <div class="form-group">
                    <label for="singer">Penyanyi</label>
                    <input type="text" class="form-control" id="singer">
                </div>
                <div class="form-group">
                    <label for="anime">Anime</label>
                    <input type="text" class="form-control" id="anime">
                    <small class="form-text text-muted">Judul anime atau lagu original/ Single</small>
                </div>
                <div class="form-group">
                    <label for="gambar">Pilih gambar music</label>
                    <input type="file" class="form-control-file" id="gambar">
                </div>
                <div class="form-group">
                    <label for="author">Admin</label>
                    <input type="test" class="form-control" id="author">
                </div>
            </form>
            `
            break;

    // scene/
        case 'scene/scene':
            return `
            <div class="cover">
                <img src="scene/scene.jpg" alt="" class="gambar replace">
                <div class="white-box"></div>
                <p class="scene">scene</p>
                <p class="title">
                    Kimetsu no yaiba
                </p>
                <p class="genre">
                    Action, Demons, Historical, Shounen, Supernatural
                </p>
                <p class="eps">Episode</p>
                <p class="episode">020</p>
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
                    <img src="scene/icon-black.png" alt="" srcset="">
                </div>
                <div class="line">
        
                </div>
                <div class="bulet">
                    <img src="scene/bulet.png" alt="">
                </div>
                <div class="logo">
                    <img src="scene/logo.png" alt="" srcset="">
                </div>
        
            </div>
        </div><br>
        <div class="container">
            <form action="" id="form">
                <div class="form-group">
                    <label for="title">Judul</label>
                    <input type="text" class="form-control" id="title">
                </div>
                <div class="form-group">
                    <label for="genre">genre</label>
                    <input type="text" class="form-control" id="genre">
                </div>
                <div class="form-group">
                    <label for="episode">Episode</label>
                    <input type="text" class="form-control" id="episode">
                </div>
                <div class="form-group">
                    <label for="gambar">Pilih gambar Scene</label>
                    <input type="file" class="form-control-file" id="gambar">
                    <small class="form-text text-muted">Gambar ini untuk preview cover, Screenshot dulu di scene</small>
                </div>
                <div class="form-group">
                    <label for="author">Admin</label>
                    <input type="test" class="form-control" id="author">
                </div>
            </form>
            `
            break;

    // music/
        case 'music/music2':
            return `
            <div class="cover">
                <img class="img-music replace" src="music/bg.png" alt="" srcset="">
                <p class="singer">Aimer</p>
                <p class="title">
                    Torches
                </p>
                <p class="anime">
                    Vinland Saga
                </p>
                <p class="admin">
                    by <span class="author">hoshi</span>
                </p>
        
            </div>
        </div><br>
        <div class="container">
            <form action="" id="form">
                <div class="form-group">
                    <label for="title">Judul</label>
                    <input type="text" class="form-control" id="title">
                </div>
                <div class="form-group">
                    <label for="singer">Penyanyi</label>
                    <input type="text" class="form-control" id="singer">
                </div>
                <div class="form-group">
                    <label for="anime">Anime</label>
                    <input type="text" class="form-control" id="anime">
                    <small class="form-text text-muted">Judul anime atau lagu original/ Single</small>
                </div>
                <div class="form-group">
                    <label for="author">Admin</label>
                    <input type="test" class="form-control" id="author">
                </div>
            </form>
            `
            break;

    // reviewfull/
        case 'reviewfull/cover':
            return `
            <div class="cover">
                <div class="gambar">
                    <img class="replace" src="reviewfull/tgk.jpg" alt="" srcset="">
                </div>
               <img src="blur/blur.png" alt="" class="footer">
                <div class="white-box"></div>
                <p class="title">
                    kimetsu no yaiba
                </p>
                <p class="desc">
                    Kisah para anak manusia yang dijadikan makanan oleh para iblis, berjuang untuk keluar atau 
                </p>
                <div class="bg-judul-content"></div>
                <p class="judul-content">
                    Review anime
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
                    <img src="reviewfull/icon.png" alt="" srcset="">
                </div>
                <div class="linebreak">
        
                </div>
                <div class="bulet">
                    <img src="reviewfull/bulet.png" alt="">
                </div>
                <div class="logo">
                    <img src="reviewfull/logo.png" alt="" srcset="">
                </div>
        
            </div>
    
            <br>
    
            <form action="" id="form">
                <div class="form-group">
                    <label for="title">Judul Anime</label>
                    <input type="text" class="form-control" id="title">
                </div>
                <div class="form-group">
                    <label for="desc">Desc Singkat</label>
                    <input type="text" class="form-control" id="desc">
                </div>
                
                <div class="form-group">
                    <label for="gambar">Pilih gambar</label>
                    <input type="file" class="form-control-file" id="gambar">
                </div>
                <div class="form-group">
                    <label for="author">Admin</label>
                    <input type="test" class="form-control" id="author">
                </div>
            </form>
            `
            break;
        case 'reviewfull/detail':
            return `
            <div class="cover">
                <img src="blur/blur-review-detail.png" alt="" class="footer">
                <div class="gambar-content">
                    <img class="replace" src="reviewfull/tgk.jpg" alt="" srcset="">
                </div>
                <div class="white-box"></div>
                <p class="title">
                    kimetsu no yaiba
                </p>
                <p class="rilis">
                    summer 2020
                </p>
                <p class="sinopsis">
                    Meski dalam wabah COVID-19, produksi film terbaru Hayao Mizaki, ‘Kimitachi wa dou Ikiru Ka’ tetap berlanjut dari kabaran sudah berjalan 36 menit, ditargetkan selesai 3 tahun mendatangMeski dalam wabah COVID-19, produksi film terbaru Hayao Mizaki, ‘Kimitachi wa dou Ikiru Ka’ tetap 
                </p>
                <div class="node"></div>
                <p class="episode">12 episode</p>
                <p class="studio">
                    kyoto animation
                </p>
                <p class="genre">
                    comedy, drama, slice of life, adventure
                </p>
                <div class="bg-judul-content"></div>
                <p class="judul-content">
                    Review anime
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
                    <img src="reviewfull/icon.png" alt="" srcset="">
                </div>
                <div class="linebreak">
        
                </div>
                <div class="bulet">
                    <img src="reviewfull/bulet.png" alt="">
                </div>
                <div class="logo">
                    <img src="reviewfull/logo.png" alt="" srcset="">
                </div>
        
            </div>
    <br>
    
            <form action="" id="form">
                <div class="form-group">
                    <label for="title">Judul Anime</label>
                    <input type="text" class="form-control" id="title">
                </div>
                <div class="form-group">
                    <label for="rilis">Musim Rilis</label>
                    <input type="text" class="form-control" id="rilis">
                    <small class="form-text text-muted">example : Summer 2020</small>
                </div>
                <div class="form-group">
                    <label for="episode">Jumlah Episode</label>
                    <input type="text" class="form-control" id="episode">
                    <small class="form-text text-muted">example : 12 Episode</small>
                </div>
                <div class="form-group">
                    <label for="studio">Studio</label>
                    <input type="text" class="form-control" id="studio">
                </div>
                <div class="form-group">
                    <label for="genre">Genre</label>
                    <input type="text" class="form-control" id="genre">
                </div>
                <div class="form-group">
                    <label for="sinopsis">Sinopsis</label>
                    <textarea class="form-control" id="sinopsis"></textarea>
                </div>
                
                <div class="form-group">
                    <label for="gambar">Pilih gambar</label>
                    <input type="file" class="form-control-file" id="gambar">
                </div>
                <div class="form-group">
                    <label for="author">Admin</label>
                    <input type="test" class="form-control" id="author">
                </div>
            </form>
            `
            break;
        case 'reviewfull/score':
            return `
            <div class="cover">
                <div class="gambar">
                    <img class="replace" src="reviewfull/kny.jpg" alt="" srcset="">
                </div>
               <img src="blur/blur-side.png" alt="" class="footer">
                <div class="white-box"></div>
                <img src="reviewfull/bg-score.png" alt="" class="bg-score">
                <p class="score">8.1</p>
                <p class="title">
                    yakusoku no neverland
                </p>
                <img src="reviewfull/star.png" alt="" class="star">
                <img src="reviewfull/bg-miniscore.png" alt="" class="bg-story">
                <p class="story">8.1</p>
                <p class="pstory">Story</p>
                <img src="reviewfull/bg-miniscore.png" alt="" class="bg-chara">
                <p class="chara">8.2</p>
                <p class="pchara">Chara</p>
                <img src="reviewfull/bg-miniscore.png" alt="" class="bg-art">
                <p class="art">8.7</p>
                <p class="part">Grafis</p>
                <img src="reviewfull/bg-miniscore.png" alt="" class="bg-sound">
                <p class="sound">8.6</p>
                <p class="psound">sound</p>
                <img src="reviewfull/bg-miniscore.png" alt="" class="bg-enjoy">
                <p class="enjoy">8.0</p>
                <p class="penjoy">Enjoy</p>
                
                
                
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
                    <img src="reviewfull/icon.png" alt="" srcset="">
                </div>
                <div class="linebreak">
        
                </div>
                <div class="logo">
                    <img src="reviewfull/logo.png" alt="" srcset="">
                </div>
        
            </div>
    <br>
    
            <form action="" id="form">
                <div class="form-group">
                    <label for="title">Judul News</label>
                    <input type="text" class="form-control" id="title">
                </div>
                <div class="form-row">
                    <div class="form-group col">
                        <label for="story">Story</label>
                        <input type="text" class="form-control" id="story">
                    </div>
                    <div class="form-group col">
                        <label for="chara">Chara</label>
                        <input type="text" class="form-control" id="chara">
                    </div>
                    <div class="form-group col">
                        <label for="art">Grafis</label>
                        <input type="text" class="form-control" id="art">
                    </div>
                    <div class="form-group col">
                        <label for="sound">Sound</label>
                        <input type="text" class="form-control" id="sound">
                    </div>
                    <div class="form-group col">
                        <label for="enjoy">Enjoy</label>
                        <input type="text" class="form-control" id="enjoy">
                    </div>
                </div>
                <div class="form-group">
                    <label for="score">Nilai Overview (Hasil rata - rata semua)</label>
                    <input type="text" class="form-control" id="score">
                </div>
                
                <div class="form-group">
                    <label for="gambar">Pilih gambar</label>
                    <input type="file" class="form-control-file" id="gambar">
                </div>
                <div class="form-group">
                    <label for="author">Admin</label>
                    <input type="test" class="form-control" id="author">
                </div>
            </form>
            `
            break;
        case 'reviewfull/ss':
            return `
            <div class="cover">
                <div class="gambar">
                    <img src="reviewfull/gambar.png" alt="" srcset="">
                </div>
                <img src="blur/blur-full.png" alt="" class="footer">
                <img src="reviewfull/gambar2.jpg" alt="" class="img-1">
                <img src="reviewfull/gambar2.jpg" alt="" class="img-2">
                <img src="reviewfull/gambar2.jpg" alt="" class="img-3">
                <img src="reviewfull/gambar2.jpg" alt="" class="img-4">
                <img src="reviewfull/gambar2.jpg" alt="" class="img-5">
                <img src="reviewfull/gambar2.jpg" alt="" class="img-6">
                <img src="reviewfull/gambar2.jpg" alt="" class="img-7">
                <img src="reviewfull/gambar2.jpg" alt="" class="img-8">
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
                    <img src="reviewfull/icon.png" alt="" srcset="">
                </div>
                <div class="linebreak">
        
                </div>
                <div class="logo">
                    <img src="reviewfull/logo.png" alt="" srcset="">
                </div>
        
            </div>
    <br>
    
            <form action="" id="form">
                <div class="form-row">
                    <div class="form-group col">
                        <label for="exampleInputEmail1">Pilih gambar 1</label>
                        <input type="file" class="form-control-file" id="img-1">
                    </div>
                    <div class="form-group col">
                        <label for="exampleInputEmail1">Pilih gambar 2</label>
                        <input type="file" class="form-control-file" id="img-2">
                    </div>
                    <div class="form-group col">
                        <label for="exampleInputEmail1">Pilih gambar 3</label>
                        <input type="file" class="form-control-file" id="img-3">
                    </div>
                    <div class="form-group col">
                        <label for="exampleInputEmail1">Pilih gambar 4</label>
                        <input type="file" class="form-control-file" id="img-4">
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col">
                        <label for="exampleInputEmail1">Pilih gambar 5</label>
                        <input type="file" class="form-control-file" id="img-5">
                    </div>
                    <div class="form-group col">
                        <label for="exampleInputEmail1">Pilih gambar 6</label>
                        <input type="file" class="form-control-file" id="img-6">
                    </div>
                    <div class="form-group col">
                        <label for="exampleInputEmail1">Pilih gambar 7</label>
                        <input type="file" class="form-control-file" id="img-7">
                    </div>
                    <div class="form-group col">
                        <label for="exampleInputEmail1">Pilih gambar 8</label>
                        <input type="file" class="form-control-file" id="img-8">
                    </div>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Admin</label>
                    <input type="test" class="form-control" id="author">
                </div>
            </form>
            `
            break;
    
    // reviewpereps/
        case 'reviewpereps/cover':
            return `
            <div class="cover">
                <div class="">
                    <img class="replace gambar" src="reviewpereps/gambar.png" alt="" srcset="">
                </div>
                <img src="blur/blur.png" alt="" class="footer">
                <div class="white-box"></div>
                <p class="title">
                    Review yakusoku no neverland episode 8
                </p>
                <div class="bg-judul-content"></div>
                <p class="judul-content">
                    Review singkat
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
                    <img src="reviewpereps/icon.png" alt="" srcset="">
                </div>
                <div class="linebreak">
        
                </div>
                <div class="bulet">
                    <img src="reviewpereps/bulet.png" alt="">
                </div>
                <div class="logo">
                    <img src="reviewpereps/logo.png" alt="" srcset="">
                </div>
        
            </div>
    <br>
            <form action="" id="form">
                <div class="form-group">
                    <label for="title">Judul</label>
                    <input type="text" class="form-control" id="title">
                    <small class="form-text text-muted">example : Review Yakusoku No Neverland Episode 10</small>
                </div>
                <div class="form-group">
                    <label for="gambar">Pilih gambar</label>
                    <input type="file" class="form-control-file" id="gambar">
                </div>
                <div class="form-group">
                    <label for="author">Admin</label>
                    <input type="test" class="form-control" id="author">
                </div>
            </form>
            `
            break;
        case 'reviewpereps/isicontent':
            return `
            <div class="cover">
                <img src="blur/blur.png" alt="" class="footer">
                <div class="white-box"></div>
                <div class="gambar-content">
                    <img class="replace" src="reviewpereps/gambar.png" alt="" srcset="">
                </div>
                <p class="desc">Miu telah kembali. Sekarang para anggota 22/7 akan melakukan penjurian seusai keputusan Miu telah kembali. Sekarang para anggota 22/7 akan melakukan penjurian seusai keputusan Miu telah kembali. Sekarang para anggota 22/7 akan melakukan penjurian seusai keputusan Miu telah </p>
                <div class="bg-judul-content"></div>
                <p class="judul-content">
                    Review singkat
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
                    <img src="reviewpereps/icon.png" alt="" srcset="">
                </div>
                <div class="linebreak">
        
                </div>
                <div class="bulet">
                    <img src="reviewpereps/bulet.png" alt="">
                </div>
                <div class="logo">
                    <img src="reviewpereps/logo.png" alt="" srcset="">
                </div>
        
            </div>
    <br>
    
            <form action="" id="form">
                <div class="form-group">
                    <label for="gambar-content">Pilih gambar</label>
                    <input type="file" class="form-control-file" id="gambar-content">
                </div>
                <div class="form-group">
                    <label for="desc">Penjelasan</label>
                    <textarea class="form-control" id="desc"></textarea>
                </div>
                <div class="form-group">
                    <label for="author">Admin</label>
                    <input type="test" class="form-control" id="author">
                </div>
            </form>
            `
            break;
        case 'reviewpereps/manga':
            return `
            <div class="cover">
                <img src="blur/blur.png" alt="" class="footer">
                <div class="white-box"></div>
                <div class="gambar-content">
                    <img class="replace" src="reviewpereps/gambar.png" alt="" srcset="">
                </div>
                <p class="desc">Miu telah kembali. Sekarang para anggota 22/7 akan melakukan penjurian seusai keputusan Miu telah kembali. Sekarang para anggota 22/7 akan melakukan penjurian seusai keputusan Miu telah kembali. Sekarang para anggota 22/7 akan melakukan penjurian seusai keputusan Miu telah </p>
                <div class="bg-judul-content"></div>
                <p class="judul-content">
                    Review singkat
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
                    <img src="reviewpereps/icon.png" alt="" srcset="">
                </div>
                <div class="linebreak">
        
                </div>
                <div class="bulet">
                    <img src="reviewpereps/bulet.png" alt="">
                </div>
                <div class="logo">
                    <img src="reviewpereps/logo.png" alt="" srcset="">
                </div>
        
            </div>
        <br>
    
            <form action="" id="form">
                <div class="form-group">
                    <label for="gambar-content">Pilih gambar Manga</label>
                    <input type="file" class="form-control-file" id="gambar-content">
                </div>
                <div class="form-group">
                    <label for="desc">Penjelasan</label>
                    <textarea class="form-control" id="desc"></textarea>
                </div>
                
                <div class="form-group">
                    <label for="author">Admin</label>
                    <input type="test" class="form-control" id="author">
                </div>
            </form>
            `
            break;
        case 'reviewpereps/image-page':
            return `
            <div class="cover">
                <img src="blur/blur.png" alt="" class="footer">
                <div class="gambar-content">
                    <img class="replace" src="reviewpereps/gambar.png" alt="" srcset="">
                </div>
                <div class="gambar-content2">
                    <img class="replace-2" src="reviewpereps/gambar2.jpg" alt="" srcset="">
                </div>
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
                    <img src="reviewpereps/icon.png" alt="" srcset="">
                </div>
                <div class="linebreak">
        
                </div>
                <div class="logo">
                    <img src="reviewpereps/logo.png" alt="" srcset="">
                </div>
        
            </div>
    <br>
    
            <form action="" id="form">
                <div class="form-row">
                    <div class="form-group col">
                        <label for="replace">Pilih gambar 1</label>
                        <input type="file" class="form-control-file" id="replace">
                    </div>
                    <div class="form-group col">
                        <label for="replace-2">Pilih gambar 2</label>
                        <input type="file" class="form-control-file" id="replace-2">
                    </div>
    
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

        default:
            break;
    }
    // accept="image/*" 
    // onchange="preview_image(event, 'img.img-char')"
}