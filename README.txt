====CARA MENGGUNAKAN API====
1. clone terlebih dahulu proyek ini dari github
2. export database image-server.sql yang tersedia didalam direktori
3. jalankan program dengan mengetikan < node server.js > 
4. akses API menggunakan postman documentation berikut https://documenter.getpostman.com/view/12917506/UVRBmRbb
5. jalankan perintah < npm install > untuk menginstall seluruh modul/dependencies yang digunakan

====LIST URL API====
1. Tambah produk : http://localhost:8000/api/v1/product <METHOD POST>
2. Get produk	 : http://localhost:8000/api/v1/products <METHOD GET>
3. Ubah produk	 : http://localhost:8000/api/v1/product/:id <METHOD PUT>
4. Hapus produk	 : http://localhost:8000/api/v1/product <METHOD DELETE>

1. Tambah produk : http://localhost:8000/api/v1/category <METHOD POST>
2. Get produk	 : http://localhost:8000/api/v1/categories <METHOD GET>
3. Ubah produk	 : http://localhost:8000/api/v1/category/:id <METHOD PUT>
4. Hapus produk	 : http://localhost:8000/api/v1/category <METHOD DELETE>

1. Untuk menampilkan gambar produk : http://localhost:8000/image/namafile.jpg