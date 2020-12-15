const hitung = () =>{
    var saldo=parseFloat(document.f1922028.isaldo.value);
    var bunga=parseFloat(document.f1922028.ibunga.value)/100;
    var waktu=parseFloat(document.f1922028.iwaktu.value);
    var hasil = "";
    for(i=1;i<=waktu;i++)
        {
            saldo=saldo+(saldo*bunga);
            hasil=hasil+"Saldo Bulan"+i+"=Rp."+saldo+"\n";
        }
    document.form-data.ohasil.value=hasil;
}
