export interface Products {
  id: number;
  nama: string;
  kategori: string;
  harga: number;
  stok: number;
  img: string;
  description?: string;
}

export const datas: Products[] = [
  {
    id: 1,
    nama: "Le mineral",
    kategori: "minuman",
    harga: 10000,
    stok: 100,
    img: "https://bithourproduction.com/blog/wp-content/uploads/2023/07/00-le-minerale-banner-range-of-products.jpg",
  },
  {
    id: 2,
    nama: "Kentang goreng",
    kategori: "makanan",
    harga: 15000,
    stok: 150,
    img: "https://asset.kompas.com/crops/35STccFKT--R2371do29Vwqtb10=/0x43:927x661/1200x800/data/photo/2022/09/14/632159cd811f2.jpg",
  },
  {
    id: 3,
    nama: "Burger",
    kategori: "makanan",
    harga: 17000,
    stok: 250,
    img: "https://t4.ftcdn.net/jpg/02/74/99/01/360_F_274990113_ffVRBygLkLCZAATF9lWymzE6bItMVuH1.jpg",
  },
  {
    id: 4,
    nama: "Burger Jumbo",
    kategori: "makanan",
    harga: 23000,
    stok: 155,
    description: "lebih besar full daging dan puas di makan",
    img: "https://img.qraved.co/v2/image/data/cover-6-1530604149881-x.png",
  },
  {
    id: 5,
    nama: "Mie Ayam",
    kategori: "makanan",
    harga: 17000,
    stok: 350,
    description: "best seller disini, bakso enak dan berdaging kenyal memanjakan lidah",
    img: "https://karawangbekasi.disway.id/upload/997f5ba86d3282c0ff9be0ef27a34aa0.jpg",
  },
  {
    id: 6,
    nama: "Bakso",
    kategori: "makanan",
    harga: 15000,
    stok: 200,
    img: "https://akcdn.detik.net.id/community/media/visual/2019/08/12/dca21bf3-923c-486f-bc2e-a3dcd759b1df_43.jpeg?w=700&q=90",
  },
  {
    id: 7,
    nama: "Teh Es",
    kategori: "minuman",
    harga: 5000,
    stok: 500,
    img: "https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2021/06/15093247/Ketahui-Fakta-Es-Teh-Manis.jpg",
  },
  {
    id: 8,
    nama: "Es Kelapa",
    kategori: "minuman",
    harga: 6000,
    stok: 450,
    img: "https://rajominang.id/blog/uploads/images/202408/image_750x_66b3a04986e44.jpg",
  },
];
