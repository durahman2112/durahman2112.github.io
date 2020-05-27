function loadHTML(name) {
    switch (name) {
        case 'news':            
            return `
        <div class="cover scale">
            <div class="gambar">
                <img src="news/kny.jpg" alt="" srcset="" style="background-position: center;background-size: cover;">
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
                <input type="file" class="form-control-file" id="gambar" onchange="preview_image(event, '#preview .gambar > img')">
            </div>
            <div class="form-group">
                <label for="author">Admin</label>
                <input type="test" class="form-control" id="author">
                <!-- <small class="form-text text-muted">Pakai 'BY' dulu lalu nama admin</small> -->
            </div>
        </form>
            `
            break;

        case 'char':
            return `
            <div class="cover scale">
                <div class="gambar">
                    <img src="char/poster.jpeg" alt="" srcset="">
                </div>
                <div class="footer">
        
                </div>
                <img src="char/char.png" alt="" class="img-char">
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
                    <input type="file" class="form-control-file" id="gambar" onchange="preview_image(event, '#preview img.img-char')">
                </div>
                <div class="form-group">
                    <label for="author">Admin</label>
                    <input type="test" class="form-control" id="author">
                    <!-- <small id="emailHelp" class="form-text text-muted">Pakai 'BY' dulu lalu nama admin</small> -->
                </div>
            </form>
            `
            break;
    
        default:
            break;
    }
}