import { useImmer } from "use-immer";
import type { Person, Change } from "../ts/types";

const ContactForm = () => {
  const [contact, setContact] = useImmer<Person>({
    nama: "",
    message: "",
    alamat: {
      provinsi: '',
      kota: ''
    }
  })

  const handleNamaChange = (e: Change) => {
    setContact( draft => {draft.nama = e.target.value} )
  }

  const handleMessageChange = (e: Change) => {
    setContact( draft => {draft.message = e.target.value} )
  }

  const handleProvinsiChange = (e: Change) => {
    setContact( draft => {draft.alamat.provinsi = e.target.value} )
  }

  const handleKotaChange = (e: Change) => {
    setContact( draft => {draft.alamat.kota = e.target.value} )
  }

  return (
    <>
      <form>
        <input type="text" value={contact.nama} onChange={handleNamaChange} placeholder="masukkan nama" /> <br />
        <input type="text" value={contact.message} onChange={handleMessageChange} placeholder="masukkan kontak"/> <br />
        <input type="text" value={contact.alamat.provinsi} onChange={handleProvinsiChange} placeholder="masukkan provinsi"/><br />
        <input type="text" value={contact.alamat.kota} onChange={handleKotaChange} placeholder="masukkan kota"/>
      </form>
      <h1>Contact Detail</h1>
      <p>Nama : {contact.nama}</p>
      <p>Pesan : {contact.message}</p>
      <p>Provinsi : {contact.alamat.provinsi}</p>
      <p>Kota : {contact.alamat.kota}</p>
    </>
  );
}

export default ContactForm;