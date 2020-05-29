function loadHTML(name) {
    switch (name) {
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
                    <label for="title">Judul </label>
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
    //pv
        case 'news/pv' :
            return `
                <div class="cover scale">
                <div class="gambar">
                    <img src="news/bg.png" alt="" srcset="">
                </div>
                <div class="white-box"></div>
                <p class="title">
                    Promosi Video anime Yakusoku No Neverland season 2!
                </p>
                <p class="desc">
                    Yakusoku No Neverland season 2 direncanakan akan rilis pada bulan Januari 2021 atau Winter 2020. Anime yang menceritakan kelanjutan kisah Emma dkk untuk bebas dari dunia iblis
                </p>
                <p class="admin">
                    by <span class="author">hoshi</span>
                </p>

                </div>
                <br>
                <form action="" id="form">
                    <div class="form-group">
                        <label for="exampleInputEmail1">Judul News</label>
                        <input type="text" class="form-control" id="title">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">News nya</label>
                        <textarea class="form-control" id="desc"></textarea>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Admin</label>
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
