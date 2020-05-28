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

        default:
            break;
    }
    // accept="image/*" 
    // onchange="preview_image(event, 'img.img-char')"
}