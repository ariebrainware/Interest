function hitung() {
    var saldo=parseFloat(document.formdata.isaldo.value);
    var bunga=parseFloat(document.formdata.ibunga.value)/100;
    var waktu=parseFloat(document.formdata.iwaktu.value);
    var hasil = "";
    for(i=1;i<=waktu;i++)
        {
            saldo=saldo+(saldo*bunga);
            hasil=hasil+"Saldo Bulan "+i+" = Rp."+saldo+"\n";
        }
    document.formdata.ohasil.value=hasil;
}
