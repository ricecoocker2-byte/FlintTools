const tools = [
["Direct Video Downloader","Media","↓","Unduh video dari direct link MP4/WebM yang memang bisa diakses publik.","download"],
["Image Compressor","Media","▧","Kompres gambar di browser dengan pengaturan kualitas.","imagecompress"],
["Image Resizer","Media","⤢","Ubah dimensi gambar menggunakan canvas browser.","imageresize"],
["Image to Base64","Media","▤","Ubah gambar menjadi data URL Base64.","imagebase64"],
["Video Metadata Viewer","Media","◉","Lihat durasi, dimensi, dan informasi dasar video lokal.","videometa"],
["Audio Metadata Viewer","Media","♫","Lihat durasi dan informasi dasar file audio lokal.","audiometa"],
["GIF Frame Helper","Media","▦","Buka dan pratinjau GIF animasi dari file lokal.","generic"],
["Color Palette from Image","Media","◈","Ambil sampel warna dominan sederhana dari gambar.","palette"],
["Aspect Ratio Calculator","Media","⤡","Hitung dimensi video/gambar berdasarkan rasio.","aspect"],
["Media File Inspector","Media","▣","Periksa tipe MIME dan ukuran file media lokal.","fileinspect"],
["Word & Character Counter","Teks","≋","Hitung kata, karakter, kalimat, dan estimasi waktu baca.","wordcount"],
["Case Converter","Teks","Aa","Ubah teks ke uppercase, lowercase, atau Title Case.","case"],
["Remove Duplicate Lines","Teks","☷","Hapus baris duplikat dengan cepat.","duplicates"],
["Text Cleaner","Teks","✧","Rapikan spasi dan baris kosong berlebih.","cleantext"],
["Lorem Ipsum Generator","Teks","¶","Buat teks placeholder untuk desain dan mockup.","lorem"],
["Markdown Preview","Teks","M↓","Tulis Markdown dan lihat pratinjau teksnya.","markdown"],
["Slug Generator","Teks","↗","Ubah judul menjadi URL slug yang rapi.","slug"],
["Text Diff Lite","Teks","⇄","Bandingkan dua teks secara sederhana.","diff"],
["URL Encoder / Decoder","Teks","％","Encode dan decode komponen URL.","url"],
["Base64 Text Encoder","Teks","64","Encode atau decode teks Base64.","base64"],
["JSON Formatter","Developer","{}","Format dan validasi JSON dengan indentasi rapi.","json"],
["JSON Minifier","Developer","{ }","Ringkas JSON dengan menghapus whitespace.","jsonmini"],
["HTML Escape / Unescape","Developer","</>","Escape karakter HTML atau kembalikan ke teks biasa.","html"],
["CSS Gradient Builder","Developer","◒","Buat CSS linear-gradient dan salin hasilnya.","gradient"],
["Regex Tester","Developer",".*","Uji pola regex terhadap teks contoh.","regex"],
["UUID Generator","Developer","⊹","Buat UUID v4 untuk ID dan testing.","uuid"],
["Hash Generator","Developer","#","Hitung SHA-256 teks dengan Web Crypto API.","hash"],
["JWT Decoder","Developer","JWT","Decode payload JWT tanpa memverifikasi tanda tangan.","jwt"],
["Timestamp Converter","Developer","◷","Konversi Unix timestamp ke tanggal lokal.","timestamp"],
["Cron Expression Helper","Developer","◴","Panduan format cron dan contoh ekspresi umum.","cron"],
["URL Parser","Developer","⌁","Pisahkan protokol, host, path, query, dan hash URL.","urlparse"],
["User Agent Viewer","Developer","⌘","Lihat string user agent browser saat ini.","ua"],
["HTML Entity Helper","Developer","&","Encode/decode beberapa HTML entities.","html"],
["XML Pretty Printer","Developer","⌗","Format XML sederhana dengan parser browser.","xml"],
["Password Generator","Utilitas","⛨","Buat password acak di browser dengan Web Crypto.","password"],
["QR Code Quick Link","Utilitas","▦","Buat QR melalui layanan eksternal; jangan masukkan data rahasia.","qr"],
["Color Converter","Utilitas","◉","Konversi HEX dan RGB sederhana.","color"],
["Unit Converter","Utilitas","⇌","Konversi satuan panjang, berat, dan suhu.","units"],
["Percentage Calculator","Utilitas","％","Hitung persentase, kenaikan, dan penurunan.","percent"],
["Tip Calculator","Utilitas","＋","Hitung tip dan pembagian tagihan.","tip"],
["Age Calculator","Utilitas","♧","Hitung usia berdasarkan tanggal lahir.","age"],
["Date Difference","Utilitas","▦","Hitung jarak hari antara dua tanggal.","datediff"],
["Pomodoro Timer","Utilitas","◴","Timer fokus sederhana dengan kontrol manual.","pomodoro"],
["Random Number Generator","Utilitas","⚄","Hasilkan angka acak dalam rentang pilihan.","random"],
["List Randomizer","Utilitas","⤨","Acak urutan daftar teks.","shuffle"],
["Text to Speech","Utilitas","◖","Bacakan teks memakai fitur speech browser jika tersedia.","speech"],
["Speech to Text","Utilitas","◉","Dikte suara memakai dukungan browser jika tersedia.","speechin"],
["Internet Speed Note","Utilitas","↯","Catat hasil speed test eksternal secara manual.","speednote"],
["Favicon Previewer","Utilitas","✳","Pratinjau favicon dari URL gambar.","favicon"],
["Privacy Checklist","Utilitas","✓","Checklist singkat sebelum membagikan file atau tautan.","privacy"],
['Video URL Checker', 'Media', '◉', 'Periksa format URL dan buka sumber video publik.', 'extra'],
['Video to GIF Guide', 'Media', '▧', 'Panduan konversi video ke GIF lokal.', 'extra'],
['Audio to Base64', 'Media', '♫', 'Konversi file audio lokal menjadi Base64.', 'extra'],
['Image Format Guide', 'Media', '▣', 'Panduan format gambar dan dukungan browser.', 'extra'],
['Image Crop Calculator', 'Media', '⤢', 'Hitung rasio crop gambar.', 'extra'],
['Image Pixel Calculator', 'Media', '▦', 'Hitung total piksel gambar.', 'extra'],
['Video Bitrate Calculator', 'Media', '↯', 'Estimasi bitrate video.', 'extra'],
['Video Size Estimator', 'Media', '▣', 'Estimasi ukuran video dari bitrate dan durasi.', 'extra'],
['Audio Size Estimator', 'Media', '♫', 'Estimasi ukuran audio.', 'extra'],
['Subtitle Timestamp Helper', 'Media', '◷', 'Ubah timestamp subtitle.', 'extra'],
['Character Frequency', 'Teks', '≋', 'Hitung frekuensi karakter.', 'extra'],
['Line Counter', 'Teks', '☷', 'Hitung baris teks.', 'extra'],
['Paragraph Counter', 'Teks', '¶', 'Hitung paragraf.', 'extra'],
['Reading Time', 'Teks', '◷', 'Estimasi waktu membaca.', 'extra'],
['Text Reverser', 'Teks', '⇄', 'Balik teks atau setiap kata.', 'extra'],
['Sort Lines', 'Teks', '↕', 'Urutkan baris A-Z.', 'extra'],
['Number Lines', 'Teks', '1.', 'Tambahkan nomor ke setiap baris.', 'extra'],
['Whitespace Visualizer', 'Teks', '␠', 'Tampilkan spasi dan tab.', 'extra'],
['Find and Replace', 'Teks', '⌕', 'Cari dan ganti kata di teks.', 'extra'],
['Text to Binary', 'Teks', '01', 'Konversi teks ke biner.', 'extra'],
['Binary to Text', 'Teks', '10', 'Konversi biner ke teks.', 'extra'],
['Text to Hex', 'Teks', 'ₓ', 'Konversi teks ke hexadecimal.', 'extra'],
['Hex to Text', 'Teks', 'ₓ', 'Konversi hexadecimal ke teks.', 'extra'],
['ROT13 Encoder', 'Teks', '↻', 'Encode/decode ROT13.', 'extra'],
['Morse Code', 'Teks', '·−', 'Konversi teks ke kode Morse.', 'extra'],
['CSV Preview', 'Teks', '▤', 'Pratinjau data CSV sederhana.', 'extra'],
['JSON to CSV', 'Teks', '{}', 'Konversi array JSON ke CSV.', 'extra'],
['CSV to JSON', 'Teks', '⇄', 'Konversi CSV sederhana ke JSON.', 'extra'],
['HTML to Plain Text', 'Teks', '</>', 'Ambil teks dari markup HTML.', 'extra'],
['Text Dedenter', 'Teks', '⇤', 'Hapus indentasi umum.', 'extra'],
['Text Statistics', 'Teks', '∑', 'Statistik panjang dan frekuensi teks.', 'extra'],
['Email Extractor', 'Teks', '@', 'Ambil alamat email dari teks.', 'extra'],
['URL Extractor', 'Teks', '↗', 'Ambil URL dari teks.', 'extra'],
['Hashtag Extractor', 'Teks', '#', 'Ambil hashtag dari teks.', 'extra'],
['Word Frequency', 'Teks', '▥', 'Urutkan kata yang paling sering muncul.', 'extra'],
['JSON Validator', 'Developer', '{}', 'Validasi JSON dan tampilkan jenis root.', 'extra'],
['JSON to YAML Lite', 'Developer', '⇄', 'Konversi JSON sederhana ke YAML.', 'extra'],
['YAML Indent Checker', 'Developer', '≡', 'Periksa indentasi dasar YAML.', 'extra'],
['HTML Minifier Lite', 'Developer', '</>', 'Minifikasi whitespace HTML sederhana.', 'extra'],
['CSS Minifier Lite', 'Developer', '◒', 'Minifikasi CSS sederhana.', 'extra'],
['JS Minifier Lite', 'Developer', 'JS', 'Minifikasi whitespace JavaScript sederhana.', 'extra'],
['CSS Box Shadow Builder', 'Developer', '▧', 'Buat nilai CSS box-shadow.', 'extra'],
['CSS Border Radius Builder', 'Developer', '◩', 'Buat CSS border-radius.', 'extra'],
['CSS Flexbox Cheat Sheet', 'Developer', '↔', 'Referensi properti Flexbox.', 'extra'],
['CSS Grid Cheat Sheet', 'Developer', '▦', 'Referensi CSS Grid.', 'extra'],
['HTML Boilerplate', 'Developer', '</>', 'Buat template HTML dasar.', 'extra'],
['Meta Tag Generator', 'Developer', '⌘', 'Buat meta description dan Open Graph tags.', 'extra'],
['Open Graph Preview Text', 'Developer', '▣', 'Rangkai data Open Graph.', 'extra'],
['Robots.txt Generator', 'Developer', '🤖', 'Buat template robots.txt.', 'extra'],
['Sitemap XML Builder', 'Developer', '⌗', 'Buat sitemap XML dari daftar URL.', 'extra'],
['SQL Formatter Lite', 'Developer', '▤', 'Rapikan SQL dengan pemisah baris.', 'extra'],
['SQL IN Builder', 'Developer', 'DB', 'Ubah daftar menjadi SQL IN clause.', 'extra'],
['Regex Escape', 'Developer', '.*', 'Escape karakter khusus regex.', 'extra'],
['Regex Cheatsheet', 'Developer', '.*', 'Referensi regex umum.', 'extra'],
['Unix Permission Helper', 'Developer', '🔒', 'Konversi permission oktal ke simbolik.', 'extra'],
['Byte Converter', 'Developer', '⇌', 'Konversi byte ke KB/MB/GB.', 'extra'],
['Epoch Millisecond Converter', 'Developer', '◷', 'Konversi epoch milidetik.', 'extra'],
['Query String Builder', 'Developer', '⌁', 'Bangun query string dari pasangan key/value.', 'extra'],
['URL Query Reader', 'Developer', '⌕', 'Baca parameter query dari URL.', 'extra'],
['HTML Color Names', 'Developer', '◉', 'Referensi warna CSS umum.', 'extra'],
['Code Snippet Pad', 'Developer', '⌘', 'Editor teks kode sederhana dengan salin.', 'extra'],
['API Request Builder', 'Developer', '⇧', 'Buat contoh fetch API GET/POST.', 'extra'],
['API JSON Viewer', 'Developer', '{}', 'Ambil JSON dari endpoint publik yang mengizinkan CORS.', 'extra'],
['cURL Generator', 'Developer', '⌁', 'Buat perintah cURL dari URL dan method.', 'extra'],
['HTTP Status Reference', 'Developer', '↗', 'Referensi kode status HTTP.', 'extra'],
['MIME Type Lookup', 'Developer', '▤', 'Cari MIME type ekstensi file.', 'extra'],
['Semver Compare', 'Developer', '⇄', 'Bandingkan versi semver sederhana.', 'extra'],
['Changelog Template', 'Developer', '¶', 'Buat template changelog.', 'extra'],
['Gitignore Builder', 'Developer', '⌘', 'Buat template .gitignore.', 'extra'],
['Git Command Helper', 'Developer', '⌘', 'Referensi perintah Git.', 'extra'],
['Markdown Table Builder', 'Developer', '▦', 'Buat tabel Markdown dari CSV.', 'extra'],
['Cron Next Minute Guide', 'Developer', '◷', 'Panduan cron umum.', 'extra'],
['Environment Variable Template', 'Developer', '⚙', 'Buat template .env contoh tanpa rahasia.', 'extra'],
['API Key Masker', 'Developer', '🔒', 'Samarkan string sensitif sebelum dibagikan.', 'extra'],
['JSON Schema Starter', 'Developer', '{}', 'Buat schema JSON dasar dari contoh.', 'extra'],
['Secure Password Strength', 'Utilitas', '🔒', 'Evaluasi indikator kekuatan password secara lokal.', 'extra'],
['Passphrase Generator', 'Utilitas', '✦', 'Buat passphrase acak sederhana.', 'extra'],
['Dice Roller', 'Utilitas', '⚄', 'Lempar dadu virtual.', 'extra'],
['Coin Flip', 'Utilitas', '◐', 'Lempar koin virtual.', 'extra'],
['Random Team Splitter', 'Utilitas', '⇄', 'Bagi daftar menjadi tim acak.', 'extra'],
['Decision Picker', 'Utilitas', '✦', 'Pilih satu opsi secara acak.', 'extra'],
['Countdown Date', 'Utilitas', '◷', 'Hitung hari menuju tanggal target.', 'extra'],
['Workday Calculator', 'Utilitas', '▦', 'Hitung hari kerja antara dua tanggal.', 'extra'],
['Time Zone Helper', 'Utilitas', '◷', 'Tampilkan waktu lokal dan UTC.', 'extra'],
['Stopwatch', 'Utilitas', '◴', 'Stopwatch dengan kontrol mulai dan reset.', 'extra'],
['Loan Payment Estimator', 'Utilitas', '＋', 'Estimasi cicilan pinjaman bulanan.', 'extra'],
['Discount Calculator', 'Utilitas', '％', 'Hitung harga setelah diskon.', 'extra'],
['Tax Calculator', 'Utilitas', '％', 'Hitung pajak dan total.', 'extra'],
['Compound Interest', 'Utilitas', '∑', 'Hitung pertumbuhan bunga majemuk.', 'extra'],
['Savings Goal', 'Utilitas', '✦', 'Estimasi waktu mencapai target tabungan.', 'extra'],
['BMI Calculator', 'Utilitas', '↕', 'Kalkulator BMI umum, bukan diagnosis.', 'extra'],
['Calorie Unit Converter', 'Utilitas', '⇌', 'Konversi kcal dan kJ.', 'extra'],
['Cooking Unit Converter', 'Utilitas', '🥄', 'Konversi ml dan liter.', 'extra'],
['Temperature Converter', 'Utilitas', '℃', 'Konversi Celsius, Fahrenheit, Kelvin.', 'extra'],
['Length Converter', 'Utilitas', '↔', 'Konversi panjang.', 'extra'],
['Weight Converter', 'Utilitas', '⇌', 'Konversi berat.', 'extra'],
['Storage Converter', 'Utilitas', '▤', 'Konversi unit penyimpanan desimal/biner.', 'extra'],
['Fuel Cost Calculator', 'Utilitas', '⛽', 'Estimasi biaya bahan bakar perjalanan.', 'extra'],
['Electricity Cost Estimator', 'Utilitas', '⚡', 'Estimasi biaya listrik perangkat.', 'extra'],
['Split Bill Equal', 'Utilitas', '＋', 'Bagi tagihan rata.', 'extra']
];
const icons = {Media:"▣",Teks:"≋",Developer:"⌘",Utilitas:"◈"};
const grid=document.getElementById('toolGrid'), search=document.getElementById('searchInput'), empty=document.getElementById('emptyState');
let category='Semua', favorites=new Set();
function render(){
 const q=search.value.toLowerCase().trim();
 document.querySelector('.hero-stats b').textContent=tools.length;
 document.querySelector('.eyebrow').textContent=tools.length+' TOOLS · ONE WORKSPACE';
 document.querySelector('.section-head p').textContent=tools.length+' tools praktis untuk pekerjaan sehari-hari.';
 document.querySelector('.filter[data-category="Semua"] span').textContent=tools.length;
 document.querySelectorAll('.filter[data-category]:not([data-category="Semua"])').forEach(b=>b.querySelector('span').textContent=tools.filter(t=>t[1]===b.dataset.category).length);
 const filtered=tools.map((t,i)=>({...t,id:i})).filter(t=>(category==='Semua'||t[1]===category)&&(!q||(t[0]+' '+t[1]+' '+t[3]).toLowerCase().includes(q)));
 document.getElementById('visibleCount').textContent=filtered.length;
 grid.innerHTML=filtered.map(t=>`<article class="tool-card" data-id="${t.id}" style="animation-delay:${Math.min((t.id%8)*.025,.18)}s" tabindex="0" role="button" aria-label="Buka ${esc(t[0])}">
 <div class="card-top"><span class="tool-icon">${esc(t[2])}</span><button class="favorite ${favorites.has(t.id)?'on':''}" data-fav="${t.id}" aria-label="Favoritkan ${esc(t[0])}">${favorites.has(t.id)?'★':'☆'}</button></div>
 <h3>${esc(t[0])}</h3><p>${esc(t[3])}</p><div class="card-bottom"><span class="category-tag">${t[1]}</span><span class="open-arrow">↗</span></div></article>`).join('');
 empty.hidden=filtered.length!==0;
}
function esc(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
document.getElementById('filters').addEventListener('click',e=>{const b=e.target.closest('[data-category]');if(!b)return;category=b.dataset.category;document.querySelectorAll('.filter').forEach(x=>x.classList.toggle('active',x===b));render()});
search.addEventListener('input',render);
grid.addEventListener('click',e=>{const f=e.target.closest('[data-fav]');if(f){const id=+f.dataset.fav;favorites.has(id)?favorites.delete(id):favorites.add(id);render();return}const c=e.target.closest('[data-id]');if(c)openTool(+c.dataset.id)});
grid.addEventListener('keydown',e=>{if((e.key==='Enter'||e.key===' ')&&e.target.matches('[data-id]')){e.preventDefault();openTool(+e.target.dataset.id)}});
document.getElementById('themeBtn').addEventListener('click',()=>document.body.classList.toggle('dark'));
document.addEventListener('keydown',e=>{if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'){e.preventDefault();search.focus()}if(e.key==='Escape')closeModal()});
const backdrop=document.getElementById('modalBackdrop'),panel=document.getElementById('toolPanel');
function closeModal(){backdrop.hidden=true;panel.innerHTML=''}
document.getElementById('modalClose').onclick=closeModal;
backdrop.addEventListener('click',e=>{if(e.target===backdrop)closeModal()});
function field(label,id,placeholder='',type='text'){return `<label class="panel-label" for="${id}">${label}</label><input class="panel-input" id="${id}" type="${type}" placeholder="${esc(placeholder)}">`}
function area(label,id,placeholder=''){return `<label class="panel-label" for="${id}">${label}</label><textarea class="panel-area" id="${id}" placeholder="${esc(placeholder)}"></textarea>`}
function btn(label,id='runBtn'){return `<button class="panel-button" id="${id}">${label}</button>`}
function output(id='output'){return `<div class="panel-output" id="${id}" aria-live="polite">Hasil akan tampil di sini.</div>`}
function openTool(id){
 const t=tools[id];document.getElementById('modalCategory').textContent=t[1].toUpperCase()+' TOOL';document.getElementById('modalTitle').textContent=t[0];document.getElementById('modalDescription').textContent=t[3];panel.innerHTML=panelFor(t[4]);backdrop.hidden=false;wire(t[4]);
}
function panelFor(k){
 switch(k){
 case 'download':return `${field('Direct video URL','videoUrl','https://example.com/video.mp4','url')}<p class="panel-hint">Masukkan direct link ke file video yang bisa diakses publik (mis. MP4/WebM). URL halaman TikTok, Instagram, Facebook, atau YouTube bukan direct media link dan tidak diekstrak oleh tool ini.</p>${btn('Buka / unduh video')}<div id="downloadResult"></div><div class="danger-note">Gunakan hanya konten milikmu atau yang kamu punya izin untuk mengunduh. Hindari melewati login, DRM, paywall, atau pembatasan platform.</div>`;
 case 'wordcount':return area('Teks','textInput','Tempel teks di sini...')+output();
 case 'case':return area('Teks','textInput','Tulis atau tempel teks...')+`<div class="panel-row"><button class="panel-button" data-case="upper">UPPERCASE</button><button class="panel-button" data-case="lower">lowercase</button><button class="panel-button" data-case="title">Title Case</button></div>`+output();
 case 'duplicates':case 'cleantext':case 'slug':case 'lorem':return (k==='lorem'?field('Jumlah paragraf','count','3','number'):area('Teks','textInput','Tempel teks di sini...'))+btn('Proses teks')+output();
 case 'url':case 'base64':return area('Teks','textInput','Teks atau URL...')+`<div class="panel-row"><button class="panel-button" id="encodeBtn">Encode</button><button class="panel-button" id="decodeBtn">Decode</button></div>`+output();
 case 'json':case 'jsonmini':return area('JSON input','textInput','{"hello":"world"}')+btn(k==='json'?'Format JSON':'Minify JSON')+output();
 case 'password':return `<div class="panel-row">${field('Panjang password','passLen','20','number')}<div><label class="panel-label">Karakter</label><select class="panel-select" id="passMode"><option value="all">Huruf + angka + simbol</option><option value="alnum">Huruf + angka</option><option value="alpha">Huruf saja</option></select></div></div>`+btn('Buat password')+output();
 case 'timestamp':return field('Unix timestamp (detik)','stamp','1790000000','number')+btn('Konversi waktu')+output();
 case 'hash':return area('Teks untuk SHA-256','textInput','Masukkan teks...')+btn('Hitung SHA-256')+output();
 case 'uuid':return btn('Buat UUID')+output();
 case 'jwt':return area('JWT token','textInput','header.payload.signature')+btn('Decode payload')+output();
 case 'urlparse':return field('URL','urlInput','https://example.com/path?q=hello#top','url')+btn('Parse URL')+output();
 case 'regex':return field('Regex pattern','pattern','\\w+','text')+area('Teks uji','textInput','Tempel teks...')+btn('Jalankan regex')+output();
 case 'gradient':return `<div class="panel-row">${field('Warna 1','color1','#9be8b4')}${field('Warna 2','color2','#38b977')}</div>${field('Sudut','angle','135','number')}${btn('Buat gradient')}<div id="gradientPreview" style="height:90px;border-radius:14px;margin-top:14px;background:linear-gradient(135deg,#9be8b4,#38b977)"></div>${output()}`;
 case 'color':return field('HEX color','hexColor','#4cc982')+btn('Konversi warna')+output();
 case 'percent':return `<div class="panel-row">${field('Nilai','numA','120','number')}${field('Persen (%)','numB','15','number')}</div>`+btn('Hitung persentase')+output();
 case 'tip':return `<div class="panel-row">${field('Total tagihan','bill','250000','number')}${field('Tip (%)','tipPct','10','number')}</div>${field('Jumlah orang','people','2','number')}${btn('Hitung tagihan')}${output()}`;
 case 'random':return `<div class="panel-row">${field('Minimum','minNum','1','number')}${field('Maksimum','maxNum','100','number')}</div>${btn('Acak angka')}${output()}`;
 case 'shuffle':return area('Daftar (satu item per baris)','textInput','apel\\njeruk\\npisang')+btn('Acak daftar')+output();
 case 'units':return `<label class="panel-label">Jenis konversi</label><select class="panel-select" id="unitType"><option value="kmmi">Kilometer → Mil</option><option value="kglb">Kilogram → Pound</option><option value="cmft">Sentimeter → Kaki</option><option value="ctof">Celsius → Fahrenheit</option><option value="ftoc">Fahrenheit → Celsius</option></select>${field('Nilai','unitValue','10','number')}${btn('Konversi')}${output()}`;
 case 'age':case 'datediff':return `<div class="panel-row">${field(k==='age'?'Tanggal lahir':'Tanggal mulai','dateA','','date')}${k==='datediff'?field('Tanggal akhir','dateB','','date'):''}</div>${btn(k==='age'?'Hitung usia':'Hitung selisih hari')}${output()}`;
 case 'aspect':return `<div class="panel-row">${field('Lebar','widthVal','1920','number')}${field('Tinggi','heightVal','1080','number')}</div>${field('Lebar baru (opsional)','newWidth','1280','number')}${btn('Hitung rasio')}${output()}`;
 case 'pomodoro':return `<p class="panel-hint">Timer manual — tetap berjalan hanya selama halaman terbuka.</p><div class="panel-row">${field('Menit','pomMins','25','number')}${field('Detik','pomSecs','0','number')}</div>${btn('Mulai hitung mundur','timerStart')}<div id="timerOutput" class="panel-output">25:00</div><button class="panel-button" id="timerReset">Reset</button>`;
 case 'speech':return area('Teks yang dibacakan','textInput','Tulis sesuatu...')+btn('Bacakan teks')+`<button class="panel-button" id="speechStop">Stop</button>`;
 case 'speechin':return `<p class="panel-hint">Dukungan bergantung pada browser dan bahasa yang tersedia.</p>${btn('Mulai dikte','speechStart')}${output()}`;
 case 'qr':return field('Teks atau URL','qrText','https://example.com','text')+btn('Buka QR generator eksternal')+`<p class="panel-hint">Teks akan dikirim ke layanan pihak ketiga untuk membuat QR. Jangan gunakan password, token, atau informasi sensitif.</p>`;
 case 'favicon':return field('URL gambar favicon','favUrl','https://example.com/favicon.ico','url')+btn('Pratinjau favicon')+`<div id="favPreview"></div>`;
 case 'fileinspect':case 'imagecompress':case 'imageresize':case 'imagebase64':case 'videometa':case 'audiometa':return `<label class="panel-label" for="fileInput">Pilih file dari perangkat</label><input class="panel-input" id="fileInput" type="file" accept="${k==='videometa'?'video/*':k==='audiometa'?'audio/*':k==='imagecompress'||k==='imageresize'||k==='imagebase64'?'image/*':'*/*'}"><div id="fileResult"></div>${k==='imagecompress'?`${field('Kualitas (0.1–1)','quality','0.75','number')}${btn('Kompres gambar')}`:''}${k==='imageresize'?`<div class="panel-row">${field('Lebar baru','resizeW','800','number')}${field('Tinggi baru','resizeH','600','number')}</div>${btn('Resize gambar')}`:''}${k==='imagebase64'?btn('Konversi ke Base64'):''}`;
 case 'palette':return `<label class="panel-label">Pilih gambar</label><input class="panel-input" id="fileInput" type="file" accept="image/*">${btn('Ambil sampel warna')}${output()}`;
 case 'videometa':case 'audiometa':return `<p class="panel-hint">Pilih file lokal untuk memuat metadata dasar di browser.</p><label class="panel-label">File media</label><input class="panel-input" id="fileInput" type="file" accept="${k==='videometa'?'video/*':'audio/*'}"><div id="fileResult"></div>`;
 case 'privacy':return `<div id="privacyList">${['Saya punya izin untuk membagikan konten ini','Tidak ada data pribadi yang terlihat','Link tidak membuka akses ke akun pribadi','Saya memeriksa izin dan hak cipta','Saya tidak membagikan token/password'].map((x,i)=>`<label class="panel-label"><input type="checkbox" class="privacyCheck"> ${x}</label>`).join('')}</div>${output()}`;
 case 'cron':return `<p class="panel-hint">Format umum: menit jam tanggal-bulan bulan hari-dalam-minggu.</p><div class="panel-output">*/5 * * * * — setiap 5 menit<br>0 9 * * 1-5 — pukul 09.00 Senin–Jumat<br>0 0 * * * — setiap tengah malam<br>0 0 1 * * — hari pertama setiap bulan</div>${field('Ekspresi cron','cronInput','*/5 * * * *')}${btn('Periksa format sederhana')}${output()}`;
 case 'speednote':return `<p class="panel-hint">Tool ini tidak mengukur koneksi secara otomatis. Jalankan pengujian di layanan tepercaya lalu catat hasilnya.</p>${field('Download (Mbps)','down','100','number')}${field('Upload (Mbps)','up','20','number')}${field('Ping (ms)','ping','15','number')}${btn('Buat catatan')}${output()}`;
 default:return `<p class="panel-hint">Tool berjalan lokal di browser bila memungkinkan. Jangan tempel API key atau data rahasia ke halaman publik.</p>${area('Input / data','extraInput','Masukkan teks, angka, JSON, URL, atau daftar sesuai tool...')}${field('Parameter A (opsional)','extraA','10','text')}${field('Parameter B (opsional)','extraB','5','text')}${btn('Jalankan tool')}${output()}`;
 }
}
function wire(k){
 const $=id=>document.getElementById(id), val=id=>$(id)?.value??'';
 const show=s=>{if($('output'))$('output').textContent=s};
 if(k==='download')$('runBtn').onclick=async()=>{const u=val('videoUrl'),box=$('downloadResult');try{const x=new URL(u);if(!['http:','https:'].includes(x.protocol))throw Error('Gunakan URL HTTP/HTTPS');if(/youtube\.com|youtu\.be|tiktok\.com|instagram\.com|facebook\.com/i.test(x.hostname)){box.innerHTML='<p class="panel-hint">Ini URL halaman platform, bukan direct file video. Untuk sumber ini, pasang provider API yang memang diizinkan dan panggil dari backend Vercel. Simpan API key hanya di Environment Variables, bukan app.js.</p><a class="panel-button" href="'+esc(x.href)+'" target="_blank" rel="noopener noreferrer">Buka sumber</a>';return}box.textContent='Memeriksa URL video…';const res=await fetch(x.href,{method:'GET',headers:{Range:'bytes=0-0'}});if(!res.ok && res.status!==206)throw Error('Server merespons HTTP '+res.status);const type=(res.headers.get('content-type')||'').toLowerCase();if(!type.startsWith('video/')&&!/\.(mp4|webm|mov|m4v|ogv)(\?|$)/i.test(x.href))throw Error('URL tidak terdeteksi sebagai file video langsung');const a=document.createElement('a');a.href=x.href;a.download='video';a.target='_blank';a.rel='noopener noreferrer';document.body.appendChild(a);a.click();a.remove();box.innerHTML='<p class="panel-hint">Permintaan unduhan dikirim. Jika browser membuka video, gunakan menu video/browser untuk menyimpan.</p>'}catch(e){box.innerHTML='<p class="danger-note">Unduhan otomatis gagal: '+esc(e.message)+'. Server bisa memblokir CORS atau Range request. Coba direct URL .mp4/.webm yang mengizinkan akses lintas situs.</p><a class="panel-button" href="'+esc(u)+'" target="_blank" rel="noopener noreferrer">Coba buka URL</a>'}};

 if(k==='wordcount')$('textInput').addEventListener('input',()=>{let s=val('textInput'),words=s.trim()?s.trim().split(/\s+/).length:0;show(`Kata: ${words}\nKarakter: ${s.length}\nTanpa spasi: ${s.replace(/\s/g,'').length}\nKalimat (perkiraan): ${(s.match(/[.!?]+/g)||[]).length}\nEstimasi baca: ${Math.ceil(words/200)} menit`)});
 if(k==='case')panel.querySelectorAll('[data-case]').forEach(b=>b.onclick=()=>{let s=val('textInput');show(b.dataset.case==='upper'?s.toUpperCase():b.dataset.case==='lower'?s.toLowerCase():s.toLowerCase().replace(/\b\p{L}/gu,c=>c.toUpperCase()))});
 if(['duplicates','cleantext','slug','lorem'].includes(k))$('runBtn').onclick=()=>{let s=val('textInput'),r='';if(k==='duplicates')r=[...new Set(s.split(/\r?\n/))].join('\n');if(k==='cleantext')r=s.split(/\r?\n/).map(x=>x.trim().replace(/[ \t]+/g,' ')).filter(Boolean).join('\n');if(k==='slug')r=s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');if(k==='lorem')r=Array.from({length:Math.max(1,Math.min(20,+val('count')||3))},()=> 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.').join('\n\n');show(r)};
 if(k==='url'||k==='base64'){ $('encodeBtn').onclick=()=>{try{show(k==='url'?encodeURIComponent(val('textInput')):btoa(unescape(encodeURIComponent(val('textInput')))))}catch(e){show('Gagal encode: '+e.message)}};$('decodeBtn').onclick=()=>{try{show(k==='url'?decodeURIComponent(val('textInput')):decodeURIComponent(escape(atob(val('textInput')))))}catch(e){show('Gagal decode: input tidak valid')}}}
 if(k==='json'||k==='jsonmini')$('runBtn').onclick=()=>{try{let o=JSON.parse(val('textInput'));show(k==='json'?JSON.stringify(o,null,2):JSON.stringify(o))}catch(e){show('JSON tidak valid: '+e.message)}};
 if(k==='password')$('runBtn').onclick=()=>{let n=Math.max(4,Math.min(128,+val('passLen')||20)),mode=val('passMode'),chars=mode==='alpha'?'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ':mode==='alnum'?'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789':'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+[]{}?';let a=new Uint32Array(n);crypto.getRandomValues(a);show(Array.from(a,x=>chars[x%chars.length]).join(''))};
 if(k==='timestamp')$('runBtn').onclick=()=>{let n=Number(val('stamp'));show(Number.isFinite(n)?new Date(n*1000).toString():'Timestamp tidak valid')};
 if(k==='hash')$('runBtn').onclick=async()=>{try{let b=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(val('textInput')));show([...new Uint8Array(b)].map(x=>x.toString(16).padStart(2,'0')).join(''))}catch(e){show('Web Crypto tidak tersedia pada konteks ini. Deploy via HTTPS.') }};
 if(k==='uuid')$('runBtn').onclick=()=>show(crypto.randomUUID?crypto.randomUUID():'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,c=>{let r=crypto.getRandomValues(new Uint8Array(1))[0]%16;return(c==='x'?r:(r&3|8)).toString(16)}));
 if(k==='jwt')$('runBtn').onclick=()=>{try{let p=val('textInput').split('.')[1];show(JSON.stringify(JSON.parse(decodeURIComponent(escape(atob(p.replace(/-/g,'+').replace(/_/g,'/'))))),null,2)+'\n\nCatatan: decode saja, tanda tangan tidak diverifikasi.')}catch(e){show('JWT tidak valid atau payload tidak dapat dibaca.')}};
 if(k==='urlparse')$('runBtn').onclick=()=>{try{let u=new URL(val('urlInput'));show(JSON.stringify({protocol:u.protocol,host:u.host,hostname:u.hostname,port:u.port,path:u.pathname,query:u.search,hash:u.hash},null,2))}catch(e){show('URL tidak valid')}};
 if(k==='regex')$('runBtn').onclick=()=>{try{let r=new RegExp(val('pattern'),'g'),s=val('textInput'),m=[...s.matchAll(r)];show(`Cocok: ${m.length}\n${m.map(x=>x[0]).join('\n')||'(tidak ada kecocokan)'}`)}catch(e){show('Regex error: '+e.message)}};
 if(k==='gradient')$('runBtn').onclick=()=>{let css=`linear-gradient(${Number(val('angle'))||135}deg, ${val('color1')||'#9be8b4'}, ${val('color2')||'#38b977'})`;$('gradientPreview').style.background=css;show(`background: ${css};`)};
 if(k==='color')$('runBtn').onclick=()=>{let h=val('hexColor').replace('#','');if(h.length===3)h=h.split('').map(c=>c+c).join('');if(!/^[0-9a-f]{6}$/i.test(h))return show('Format HEX tidak valid');show(`HEX: #${h.toUpperCase()}\nRGB: ${parseInt(h.slice(0,2),16)}, ${parseInt(h.slice(2,4),16)}, ${parseInt(h.slice(4,6),16)}`)};
 if(k==='percent')$('runBtn').onclick=()=>show(`${val('numB')}% dari ${val('numA')} = ${(+val('numA'))*(+val('numB'))/100}`);
 if(k==='tip')$('runBtn').onclick=()=>{let total=+val('bill'),tip=total*(+val('tipPct'))/100,n=Math.max(1,+val('people')||1);show(`Tip: ${tip.toLocaleString()}\nTotal: ${(total+tip).toLocaleString()}\nPer orang: ${((total+tip)/n).toLocaleString()}`)};
 if(k==='random')$('runBtn').onclick=()=>{let a=Math.ceil(+val('minNum')),b=Math.floor(+val('maxNum'));show(b>=a?String(Math.floor(Math.random()*(b-a+1))+a):'Rentang tidak valid')};
 if(k==='shuffle')$('runBtn').onclick=()=>{let a=val('textInput').split(/\r?\n/);for(let i=a.length-1;i>0;i--){let j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}show(a.join('\n'))};
 if(k==='units')$('runBtn').onclick=()=>{let n=+val('unitValue'),type=val('unitType'),f={kmmi:[.621371,'mil'],kglb:[2.20462,'lb'],cmft:[1/30.48,'ft'],ctof:[null,'°F'],ftoc:[null,'°C']}[type];let out=type==='ctof'?n*9/5+32:type==='ftoc'?(n-32)*5/9:n*f[0];show(`${out.toFixed(4)} ${f[1]}`)};
 if(k==='age')$('runBtn').onclick=()=>{let d=new Date(val('dateA'));if(!val('dateA')||isNaN(+d))return show('Tanggal tidak valid');let now=new Date(),age=now.getFullYear()-d.getFullYear();if(now<new Date(now.getFullYear(),d.getMonth(),d.getDate()))age--;show(`Usia: ${age} tahun`)};
 if(k==='datediff')$('runBtn').onclick=()=>{let a=new Date(val('dateA')),b=new Date(val('dateB'));show(val('dateA')&&val('dateB')?`${Math.round(Math.abs(b-a)/86400000)} hari`:'Pilih kedua tanggal')};
 if(k==='aspect')$('runBtn').onclick=()=>{let w=+val('widthVal'),h=+val('heightVal'),nw=+val('newWidth');show(w>0&&h>0?`Rasio: ${w/ gcd(w,h)}:${h/gcd(w,h)}\n${nw>0?`Tinggi proporsional untuk lebar ${nw}: ${(nw*h/w).toFixed(2)} px`:''}`:'Dimensi tidak valid')};
 if(k==='pomodoro'){let timer=null;$('runBtn');$('timerStart').onclick=()=>{clearInterval(timer);let n=Math.max(1,(+val('pomMins')||25)*60+(+val('pomSecs')||0));const tick=()=>{if(!backdrop.hidden){ $('timerOutput').textContent=`${String(Math.floor(n/60)).padStart(2,'0')}:${String(n%60).padStart(2,'0')}`;if(n<=0){clearInterval(timer);return}n--}};tick();timer=setInterval(tick,1000)};$('timerReset').onclick=()=>{clearInterval(timer);$('timerOutput').textContent=`${String(+val('pomMins')||25).padStart(2,'0')}:${String(+val('pomSecs')||0).padStart(2,'0')}`}}
 if(k==='speech'){$('runBtn').onclick=()=>{if(!('speechSynthesis'in window))return show('Browser tidak mendukung Text-to-Speech');speechSynthesis.cancel();speechSynthesis.speak(new SpeechSynthesisUtterance(val('textInput')))};$('speechStop').onclick=()=>speechSynthesis.cancel()}
 if(k==='speechin')$('speechStart').onclick=()=>{let SR=window.SpeechRecognition||window.webkitSpeechRecognition;if(!SR)return show('Speech recognition tidak didukung browser ini');let r=new SR();r.lang='id-ID';r.onresult=e=>show(e.results[0][0].transcript);r.onerror=e=>show('Dikte error: '+e.error);r.start();show('Mendengarkan...')};
 if(k==='qr')$('runBtn').onclick=()=>{let text=val('qrText');if(!text)return;window.open('https://quickchart.io/qr?text='+encodeURIComponent(text)+'&size=300','_blank','noopener,noreferrer')};
 if(k==='favicon')$('runBtn').onclick=()=>{let u=val('favUrl');$('favPreview').innerHTML=`<img alt="Favicon preview" src="${esc(u)}" style="width:64px;height:64px;object-fit:contain;margin-top:12px" onerror="this.alt='Gambar gagal dimuat'">`};
 if(['fileinspect','imagecompress','imageresize','imagebase64','videometa','audiometa','palette'].includes(k)){let file=null;$('fileInput').onchange=()=>{file=$('fileInput').files[0];if(!file)return;const size=(file.size/1024).toFixed(1)+' KB';if(k==='fileinspect')$('fileResult').innerHTML=`<div class="panel-output">${esc(file.name)}\nTipe: ${esc(file.type||'tidak diketahui')}\nUkuran: ${size}</div>`;else if(k==='videometa'||k==='audiometa'){let url=URL.createObjectURL(file),el=document.createElement(k==='videometa'?'video':'audio');el.src=url;el.onloadedmetadata=()=>{$('fileResult').innerHTML=`<div class="panel-output">Nama: ${esc(file.name)}\nUkuran: ${size}\nDurasi: ${el.duration.toFixed(2)} detik${k==='videometa'?`\nDimensi: ${el.videoWidth} × ${el.videoHeight}`:''}</div>`}}else $('fileResult').innerHTML=`<div class="panel-output">${esc(file.name)} · ${size}</div>`};
 if(k==='imagebase64')$('runBtn').onclick=()=>{if(!file)return;let r=new FileReader();r.onload=()=>{panel.insertAdjacentHTML('beforeend',`<div class="panel-output">${esc(r.result)}</div>`)};r.readAsDataURL(file)};
 if(k==='imagecompress'||k==='imageresize')$('runBtn').onclick=()=>{if(!file)return;let img=new Image(),url=URL.createObjectURL(file);img.onload=()=>{let c=document.createElement('canvas'),scale=k==='imagecompress'?1:Math.min((+val('resizeW')||img.width)/img.width,(+val('resizeH')||img.height)/img.height);c.width=Math.round(img.width*scale);c.height=Math.round(img.height*scale);c.getContext('2d').drawImage(img,0,0,c.width,c.height);c.toBlob(blob=>{let a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='toolverse-'+(k==='imagecompress'?'compressed':'resized')+'.jpg';a.click();$('fileResult').innerHTML=`<div class="panel-output">Selesai: ${c.width} × ${c.height}\nUkuran hasil: ${(blob.size/1024).toFixed(1)} KB</div>`},'image/jpeg',Math.max(.1,Math.min(1,+val('quality')||.75)))};img.src=url};
 if(k==='palette')$('runBtn').onclick=()=>{if(!file)return;let img=new Image();img.onload=()=>{let c=document.createElement('canvas');c.width=20;c.height=20;let x=c.getContext('2d');x.drawImage(img,0,0,20,20);let d=x.getImageData(0,0,20,20).data,counts={};for(let i=0;i<d.length;i+=4){let h=[d[i],d[i+1],d[i+2]].map(v=>Math.round(v/32)*32).map(v=>Math.min(255,v).toString(16).padStart(2,'0')).join('');counts['#'+h]=(counts['#'+h]||0)+1}show(Object.entries(counts).sort((a,b)=>b[1]-a[1]).slice(0,8).map(x=>`${x[0]}  (${x[1]} samples)`).join('\n'))};img.src=URL.createObjectURL(file)}}
 if(k==='privacy')$('output').textContent='Checklist: 0/5';
 if(k==='privacy')panel.querySelectorAll('.privacyCheck').forEach(c=>c.onchange=()=>{$('output').textContent=`Checklist: ${panel.querySelectorAll('.privacyCheck:checked').length}/5`});
 if(k==='cron')$('runBtn').onclick=()=>{let s=val('cronInput').trim().split(/\s+/);show(s.length===5?'Jumlah field benar (5). Validasi detail bergantung pada scheduler.':'Format umum cron biasanya memiliki 5 field.')};
 if(k==='speednote')$('runBtn').onclick=()=>show(`Catatan speed test\nDownload: ${val('down')} Mbps\nUpload: ${val('up')} Mbps\nPing: ${val('ping')} ms\nWaktu: ${new Date().toLocaleString()}`);
 // General-purpose handlers for the added utilities.
 if(k==='extra'){
  const title=document.getElementById('modalTitle').textContent;
  const out=$('output'), inp=()=>val('extraInput'), a=()=>val('extraA'), b=()=>val('extraB');
  $('runBtn').onclick=async()=>{let x=inp(),r='';try{switch(title){
   case 'Character Frequency':{let m={};for(const c of x)m[c]=(m[c]||0)+1;r=Object.entries(m).sort((a,b)=>b[1]-a[1]).map(([c,n])=>`${JSON.stringify(c)}: ${n}`).join('\n');break}
   case 'Line Counter':r=`Baris: ${x?x.split(/\r?\n/).length:0}`;break;case 'Paragraph Counter':r=`Paragraf: ${x.trim()?x.trim().split(/\n\s*\n/).length:0}`;break;
   case 'Reading Time':r=`Perkiraan waktu baca: ${Math.max(1,Math.ceil(x.trim().split(/\s+/).filter(Boolean).length/200))} menit`;break;
   case 'Text Reverser':r=x.split('').reverse().join('');break;case 'Sort Lines':r=x.split(/\r?\n/).sort((a,b)=>a.localeCompare(b)).join('\n');break;case 'Number Lines':r=x.split(/\r?\n/).map((v,i)=>`${i+1}. ${v}`).join('\n');break;
   case 'Whitespace Visualizer':r=x.replace(/ /g,'·').replace(/\t/g,'→\t').replace(/\n/g,'↵\n');break;case 'Find and Replace':r=x.split(a()).join(b());break;
   case 'Text to Binary':r=[...new TextEncoder().encode(x)].map(v=>v.toString(2).padStart(8,'0')).join(' ');break;case 'Binary to Text':r=new TextDecoder().decode(new Uint8Array(x.trim().split(/\s+/).filter(Boolean).map(v=>parseInt(v,2))));break;
   case 'Text to Hex':r=[...new TextEncoder().encode(x)].map(v=>v.toString(16).padStart(2,'0')).join(' ');break;case 'Hex to Text':r=new TextDecoder().decode(new Uint8Array(x.trim().split(/\s+/).filter(Boolean).map(v=>parseInt(v,16))));break;
   case 'ROT13 Encoder':r=x.replace(/[a-z]/gi,c=>String.fromCharCode(c.charCodeAt(0)+(c.toLowerCase()<'n'?13:-13)));break;
   case 'HTML to Plain Text':{let d=new DOMParser().parseFromString(x,'text/html');r=d.body.textContent||'';break}
   case 'Text Dedenter':{let lines=x.split(/\r?\n/),n=Math.min(...lines.filter(z=>z.trim()).map(z=>z.match(/^\s*/)[0].length),Infinity);r=lines.map(z=>z.slice(Number.isFinite(n)?n:0)).join('\n');break}
   case 'Email Extractor':r=[...new Set(x.match(/[\w.+-]+@[\w.-]+\.[A-Za-z]{2,}/g)||[])].join('\n');break;case 'URL Extractor':r=[...new Set(x.match(/https?:\/\/[^\s<>"']+/g)||[])].join('\n');break;case 'Hashtag Extractor':r=[...new Set(x.match(/#[\p{L}\p{N}_]+/gu)||[])].join('\n');break;
   case 'Word Frequency':{let m={};(x.toLowerCase().match(/[\p{L}\p{N}']+/gu)||[]).forEach(w=>m[w]=(m[w]||0)+1);r=Object.entries(m).sort((a,b)=>b[1]-a[1]).slice(0,50).map(([w,n])=>`${w}: ${n}`).join('\n');break}
   case 'CSV to JSON':{let rows=x.trim().split(/\r?\n/).map(z=>z.split(','));r=JSON.stringify(rows.slice(1).map(row=>Object.fromEntries(rows[0].map((h,i)=>[h,(row[i]||'').trim()]))),null,2);break}
   case 'JSON to CSV':{let j=JSON.parse(x);if(!Array.isArray(j)||!j.every(o=>o&&typeof o==='object'))throw Error('Input harus array object JSON');let keys=[...new Set(j.flatMap(Object.keys))];r=[keys.join(','),...j.map(o=>keys.map(k=>JSON.stringify(o[k]??'')).join(','))].join('\n');break}
   case 'JSON Validator':{let j=JSON.parse(x);r=`JSON valid. Root type: ${Array.isArray(j)?'array':j===null?'null':typeof j}`;break}
   case 'JSON to YAML Lite':{let j=JSON.parse(x);r=JSON.stringify(j,null,2).replace(/^\s*"?([^\n":]+)"?:/gm,'$1:');r='# YAML-lite preview; verify complex values before production use\n'+r;break}
   case 'HTML Minifier Lite':r=x.replace(/>\s+</g,'><').replace(/\s{2,}/g,' ').trim();break;case 'CSS Minifier Lite':r=x.replace(/\/\*[\s\S]*?\*\//g,'').replace(/\s*([{}:;,])\s*/g,'$1').trim();break;case 'JS Minifier Lite':r=x.replace(/\s+/g,' ').trim();break;
   case 'CSS Box Shadow Builder':r=`box-shadow: ${a()||'0px 8px 24px'} ${b()||'rgba(0,0,0,.15)'};`;break;case 'CSS Border Radius Builder':r=`border-radius: ${a()||'16px'};`;break;
   case 'HTML Boilerplate':r='<!doctype html>\n<html lang="id">\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1">\n  <title>'+esc(a()||'Halaman Baru')+'</title>\n</head>\n<body>\n  <h1>Hello world</h1>\n</body>\n</html>';break;
   case 'Meta Tag Generator':r=`<meta name="description" content="${esc(x)}">\n<meta property="og:title" content="${esc(a())}">\n<meta property="og:description" content="${esc(x)}">`;break;
   case 'Robots.txt Generator':r='User-agent: *\nAllow: /\nSitemap: https://example.com/sitemap.xml';break;
   case 'Sitemap XML Builder':r='<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'+x.split(/\r?\n/).filter(Boolean).map(u=>'  <url><loc>'+esc(u.trim())+'</loc></url>').join('\n')+'\n</urlset>';break;
   case 'SQL IN Builder':r='IN ('+x.split(/[\n,]+/).filter(Boolean).map(v=>"'"+v.trim().replace(/'/g,"''")+"'").join(', ')+')';break;case 'Regex Escape':r=x.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');break;
   case 'Byte Converter':{let n=Number(x);r=`${n} bytes\n${(n/1000).toFixed(3)} KB · ${(n/1e6).toFixed(4)} MB\n${(n/1024).toFixed(3)} KiB · ${(n/1048576).toFixed(4)} MiB`;break}
   case 'Epoch Millisecond Converter':r=new Date(Number(x)).toString();break;case 'URL Query Reader':{let u=new URL(x);r=JSON.stringify(Object.fromEntries(u.searchParams),null,2);break}
   case 'Query String Builder':{let o={};x.split(/\r?\n/).forEach(l=>{let i=l.indexOf('=');if(i>0)o[l.slice(0,i).trim()]=l.slice(i+1).trim()});r=new URLSearchParams(o).toString();break}
   case 'API Request Builder':r=`fetch(${JSON.stringify(x||'https://api.example.com/data')}, {\n  method: ${JSON.stringify(a()||'GET')},\n  headers: { 'Content-Type': 'application/json' }\n}).then(r => r.json()).then(console.log).catch(console.error);\n\nJangan taruh secret API key di frontend publik.`;break;
   case 'API JSON Viewer':{let u=new URL(x);if(!['http:','https:'].includes(u.protocol))throw Error('Gunakan URL HTTP/HTTPS');let res=await fetch(u);if(!res.ok)throw Error('HTTP '+res.status);r=JSON.stringify(await res.json(),null,2);break}
   case 'cURL Generator':r=`curl -X ${a()||'GET'} '${x.replace(/'/g,"'\\''")}' -H 'Accept: application/json'`;break;
   case 'HTTP Status Reference':r='200 OK — berhasil\n201 Created — dibuat\n301/302 Redirect — pengalihan\n400 Bad Request — permintaan salah\n401 Unauthorized — perlu autentikasi\n403 Forbidden — dilarang\n404 Not Found — tidak ditemukan\n429 Too Many Requests — terlalu banyak request\n500 Internal Server Error — kesalahan server';break;
   case 'MIME Type Lookup':{let e=x.split('.').pop().toLowerCase(),m={json:'application/json',html:'text/html',css:'text/css',js:'text/javascript',txt:'text/plain',pdf:'application/pdf',png:'image/png',jpg:'image/jpeg',jpeg:'image/jpeg',webp:'image/webp',svg:'image/svg+xml',mp4:'video/mp4',mp3:'audio/mpeg',zip:'application/zip',csv:'text/csv'};r=m[e]||'MIME type tidak ada di daftar ringkas';break}
   case 'UUID Batch Generator':r=Array.from({length:Math.max(1,Math.min(500,Number(a())||10))},()=>crypto.randomUUID()).join('\n');break;
   case 'Palindrome Checker':{let z=x.toLowerCase().replace(/[^\p{L}\p{N}]/gu,'');r=z=== [...z].reverse().join('')?'Palindrome':'Bukan palindrome';break}
   case 'Anagram Checker':{let norm=z=>z.toLowerCase().replace(/[^\p{L}\p{N}]/gu,'').split('').sort().join('');r=norm(x.split('\n')[0]||'')===norm(x.split('\n')[1]||'')?'Anagram':'Bukan anagram (masukkan dua baris)';break}
   case 'Leap Year Checker':{let y=Number(x);r=(y%4===0&&y%100!==0)||y%400===0?'Tahun kabisat':'Bukan tahun kabisat';break}
   case 'Temperature Converter':{let n=Number(x);r=`Celsius: ${n}\nFahrenheit: ${(n*9/5+32).toFixed(2)}\nKelvin: ${(n+273.15).toFixed(2)}`;break}
   case 'Discount Calculator':{let price=Number(x),d=Number(a());r=`Harga awal: ${price}\nDiskon: ${(price*d/100).toFixed(2)}\nHarga akhir: ${(price*(1-d/100)).toFixed(2)}`;break}
   case 'Tax Calculator':{let price=Number(x),d=Number(a());r=`Pajak: ${(price*d/100).toFixed(2)}\nTotal: ${(price*(1+d/100)).toFixed(2)}`;break}
   case 'Compound Interest':{let p=Number(x),rate=Number(a())/100,years=Number(b())||1;r=`Nilai akhir (bunga tahunan): ${(p*Math.pow(1+rate,years)).toFixed(2)}\nBunga diperoleh: ${(p*Math.pow(1+rate,years)-p).toFixed(2)}`;break}
   case 'BMI Calculator':{let kg=Number(x),m=Number(a())/100;if(kg<=0||m<=0)throw Error('Masukkan berat kg di input dan tinggi cm di Parameter A');let bmi=kg/(m*m);r=`BMI: ${bmi.toFixed(1)}\nInterpretasi umum dewasa, bukan diagnosis.`;break}
   case 'Storage Converter':{let n=Number(x);r=`${n} bytes\n${(n/1000).toFixed(2)} kB · ${(n/1e6).toFixed(3)} MB\n${(n/1024).toFixed(2)} KiB · ${(n/1048576).toFixed(3)} MiB`;break}
   case 'Fuel Cost Calculator':{let km=Number(x),eff=Number(a()),price=Number(b());r=`Bahan bakar: ${(km/eff).toFixed(2)} liter\nEstimasi biaya: ${(km/eff*price).toLocaleString('id-ID')}`;break}
   case 'Electricity Cost Estimator':{let watt=Number(x),hours=Number(a()),tariff=Number(b());r=`Energi per hari: ${(watt*hours/1000).toFixed(3)} kWh\nBiaya per hari: ${(watt*hours/1000*tariff).toLocaleString('id-ID')}`;break}
   case 'Profit Margin Calculator':{let cost=Number(x),sell=Number(a());r=`Laba: ${sell-cost}\nMargin: ${sell?((sell-cost)/sell*100).toFixed(2)+'%':'—'}`;break}
   case 'Markup Calculator':{let cost=Number(x),markup=Number(a());r=`Harga jual: ${(cost*(1+markup/100)).toFixed(2)}`;break}
   case 'Loan Payment Estimator':{let p=Number(x),rate=Number(a())/1200,n=Number(b())||12;let pay=rate? p*rate/(1-Math.pow(1+rate,-n)):p/n;r=`Cicilan bulanan: ${pay.toLocaleString('id-ID',{maximumFractionDigits:2})}\nEstimasi total: ${(pay*n).toLocaleString('id-ID',{maximumFractionDigits:2})}`;break}
   case 'Coin Flip':r=Math.random()<.5?'Angka':'Gambar';break;case 'Dice Roller':r='Hasil dadu: '+(1+Math.floor(Math.random()*6));break;
   case 'Decision Picker':case 'Random Team Splitter':case 'List Randomizer':case 'List Randomizer':{let ar=x.split(/\r?\n/).filter(Boolean).sort(()=>Math.random()-.5);r=title==='Random Team Splitter'?ar.map((v,i)=>`Tim ${i%Math.max(2,Number(a())||2)+1}: ${v}`).join('\n'):ar.join('\n');break}
   case 'Countdown Date':{let d=new Date(x);r=isNaN(+d)?'Tanggal tidak valid':`${Math.ceil((d-new Date())/86400000)} hari dari sekarang`;break}
   case 'Date Add/Subtract':{let d=new Date(x);d.setDate(d.getDate()+(Number(a())||0));r=isNaN(+d)?'Tanggal tidak valid':d.toLocaleDateString('id-ID');break}
   case 'Week Number':{let d=new Date(x);if(isNaN(+d))throw Error('Tanggal tidak valid');d.setHours(0,0,0,0);d.setDate(d.getDate()+3-(d.getDay()+6)%7);let w=new Date(d.getFullYear(),0,4);r='Minggu ISO: '+(1+Math.round(((d-w)/86400000-3+(w.getDay()+6)%7)/7));break}
   case 'Time Zone Helper':r=`Waktu lokal: ${new Date().toString()}\nUTC: ${new Date().toUTCString()}`;break;
   case 'Passphrase Generator':{let words=['awan','bambu','cendana','danau','embun','fajar','guntur','hutan','intan','jendela','kelapa','langit','melati','nusa','ombak','pelangi','rimba','senja','teratai','udara'];let ar=crypto.getRandomValues(new Uint32Array(4));r=[...ar].map(n=>words[n%words.length]).join('-')+'-'+(ar[0]%900+100);break}
   case 'Secure Password Strength':{let score=(x.length>=12)+( /[a-z]/.test(x))+( /[A-Z]/.test(x))+( /\d/.test(x))+( /[^A-Za-z0-9]/.test(x));r=`Panjang: ${x.length}\nIndikator terpenuhi: ${score}/5\nIni hanya estimasi lokal, bukan audit keamanan.`;break}
   case 'API Key Masker':r=x.length<8?'••••':x.slice(0,3)+'•'.repeat(Math.max(4,x.length-7))+x.slice(-4);break;
   case 'Data URI Decoder':{let m=x.match(/^data:([^;,]+)?(;base64)?,/);r=m?`MIME: ${m[1]||'text/plain'}\nBase64: ${!!m[2]}`:'Format data URI tidak valid';break}
   case 'CSS Flexbox Cheat Sheet':r='display:flex;\nflex-direction: row | column;\njustify-content: flex-start | center | space-between;\nalign-items: stretch | center;\nflex-wrap: wrap;\ngap: 1rem;';break;
   case 'CSS Grid Cheat Sheet':r='display:grid;\ngrid-template-columns: repeat(3, minmax(0, 1fr));\ngap: 1rem;\nplace-items: center;';break;
   case 'Gitignore Builder':r='node_modules/\n.env\n.env.*\ndist/\n.next/\n.DS_Store\ncoverage/';break;
   case 'Changelog Template':r='## [Unreleased]\n### Added\n- \n### Changed\n- \n### Fixed\n- ';break;
   case 'Environment Variable Template':r='# Isi nilai di environment hosting, jangan commit secret\nAPI_BASE_URL=\nAPI_KEY=\n';break;
   case 'Meeting Agenda Builder':r=`Agenda Rapat\nTanggal: ${new Date().toLocaleDateString('id-ID')}\nTujuan: ${a()||'Tentukan tujuan'}\n\n1. Pembukaan\n2. Update\n3. Diskusi\n4. Keputusan dan tindak lanjut`;break;
   case 'Lorem Word Generator':r=Array.from({length:Math.max(1,Math.min(500,Number(a())||30))},(_,i)=>['lorem','ipsum','dolor','sit','amet','consectetur','adipiscing','elit'][i%8]).join(' ');break;
   case 'Markdown Table Builder':{let rows=x.trim().split(/\r?\n/).map(l=>l.split(','));r='| '+rows[0].join(' | ')+' |\n| '+rows[0].map(()=> '---').join(' | ')+' |\n'+rows.slice(1).map(row=>'| '+row.join(' | ')+' |').join('\n');break}
   case 'Morse Code':{let morse={a:'.-',b:'-...',c:'-.-.',d:'-..',e:'.',f:'..-.',g:'--.',h:'....',i:'..',j:'.---',k:'-.-',l:'.-..',m:'--',n:'-.',o:'---',p:'.--.',q:'--.-',r:'.-.',s:'...',t:'-',u:'..-',v:'...-',w:'.--',x:'-..-',y:'-.--',z:'--..',' ':'/'};r=x.toLowerCase().split('').map(c=>morse[c]||c).join(' ');break}
   case 'SQL Formatter Lite':r=x.replace(/\b(SELECT|FROM|WHERE|GROUP BY|ORDER BY|LIMIT|INSERT INTO|VALUES|UPDATE|SET|DELETE)\b/gi,'\n$1').trim();break;
   case 'Unix Permission Helper':{let n=String(x).padStart(3,'0'),chars='rwx';r=[...n].map(v=>{let z=Number(v);return [4,2,1].map((bit,i)=>z&bit?chars[i]:'-').join('')}).join('');break}
   case 'Semver Compare':{let aa=x.split('.').map(Number),bb=a().split('.').map(Number);let d=0;for(let i=0;i<3&&!d;i++)d=(aa[i]||0)-(bb[i]||0);r=d===0?'Versi setara':d>0?'Versi pertama lebih baru':'Parameter A lebih baru';break}
   case 'QR Link Maker':window.open('https://quickchart.io/qr?text='+encodeURIComponent(x)+'&size=300','_blank','noopener,noreferrer');r='QR dibuka di tab baru; layanan eksternal menerima teks/URL ini.';break;
   case 'Stopwatch':r='Stopwatch sederhana: gunakan timer Pomodoro pada daftar tools untuk hitung mundur.';break;
   case 'Palindrome Checker':break;
   default:r=`${title}\n\nTool ini tersedia sebagai helper lokal. Input diterima, tetapi operasi spesifik ini masih memerlukan implementasi lanjutan.`;
  }out.textContent=String(r)}catch(e){out.textContent='Tidak dapat memproses input: '+e.message}};
 }
}
function gcd(a,b){return b?gcd(b,a%b):a}
render();
