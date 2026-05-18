import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const dummyData = [
  { id: 1, name: "H. Yulianto, SH.M,M", instansi: "Bupati Pasaman Barat", status: "Hadir" },
  { id: 2, name: "Haslina Syahputri", instansi: "Pu.Ass II", status: "Hadir" },
  { id: 3, name: "Ekadiana Oktavia", instansi: "Pu.Ass II", status: "Hadir" },
  { id: 4, name: "Joni Hendri", instansi: "Bappelitbangda", status: "Hadir" },
  {
    id: 5,
    name: "Wahyu Ria Ningsih",
    instansi: "Bakecbangpol",
    status: "Hadir",
  },
  {
    id: 6,
    name: "Muriazam Rizkin D2sDik",
    instansi: "Bakecbangpol",
    status: "Hadir",
  },
  { id: 7, name: "Muharram", instansi: "Diskominfo", status: "Hadir" },
  { id: 8, name: "Yulina", instansi: "DTPH", status: "Hadir" },
  { id: 9, name: "Laila Fitri", instansi: "Disbunnak", status: "Hadir" },
  { id: 10, name: "Artina Puspita", instansi: "Disbunnak", status: "Hadir" },
  { id: 11, name: "Efrinaldi", instansi: "Diskominfo", status: "Hadir" },
  { id: 12, name: "Salpen Kasri", instansi: "Media", status: "Hadir" },
  { id: 13, name: "Adi Candra", instansi: "LSM", status: "Hadir" },
  {
    id: 14,
    name: "Ikhsan Kanma",
    instansi: "Camat Luhak Nanduo",
    status: "Hadir",
  },
  { id: 15, name: "Harinal", instansi: "BKPNM", status: "Hadir" },
  { id: 16, name: "Fitria Santi", instansi: "PTPH", status: "Hadir" },
  { id: 17, name: "Dewi Afriani", instansi: "Pariwisata", status: "Hadir" },
  { id: 18, name: "Farida Aini", instansi: "BKAD", status: "Hadir" },
  { id: 19, name: "Ernita Nauli", instansi: "Diskominfo", status: "Hadir" },
  { id: 20, name: "Evalinda", instansi: "Dinsos", status: "Hadir" },
  { id: 21, name: "Gusrianti", instansi: "Dinsos", status: "Hadir" },
  {
    id: 23,
    name: "Riska Kurniati SE.MM",
    instansi: "DPMPTSP",
    status: "Hadir",
  },
  { id: 24, name: "RM. Bona Fatwa", instansi: "DISHUB", status: "Hadir" },
  { id: 25, name: "Gina Alecia", instansi: "DINKES", status: "Hadir" },
  { id: 26, name: "Raila Hanifa", instansi: "YAPTIP", status: "Hadir" },
  { id: 27, name: "Yudhinal Revida", instansi: "Kominfo", status: "Hadir" },
  { id: 28, name: "Budi Snyono", instansi: "Bappelitbangda", status: "Hadir" },
  {
    id: 29,
    name: "Salma Alysa Syukri",
    instansi: "Mahasiswa",
    status: "Hadir",
  },
  { id: 30, name: "Sunarto", instansi: "Diskominfo", status: "Hadir" },
  { id: 31, name: "Osniwati", instansi: "Diskominfo", status: "Hadir" },
  { id: 32, name: "Nazia Elvina", instansi: "Diskominfo", status: "Hadir" },
  { id: 33, name: "Agusli", instansi: "DPKUKM", status: "Hadir" },
  { id: 34, name: "Febi Rizia Nada", instansi: "Kominfo", status: "Hadir" },
  { id: 35, name: "M. Abrar", instansi: "Wali Nagari", status: "Hadir" },
  { id: 36, name: "Wildan", instansi: "Bapenda", status: "Hadir" },
  { id: 37, name: "Armayanti", instansi: "Dishub", status: "Hadir" },
  { id: 38, name: "Syarful Mahya", instansi: "Kesra", status: "Hadir" },
  { id: 39, name: "Jon Endri", instansi: "Diskom", status: "Hadir" },
  { id: 40, name: "Syahlul Putra", instansi: "DPMN", status: "Hadir" },
  {
    id: 41,
    name: "Mahendri, S. Pd",
    instansi: "PJ. Salidosa",
    status: "Hadir",
  },
  {
    id: 42,
    name: "Ahmad Rizqy S.PE",
    instansi: "Wali Salidosa",
    status: "Hadir",
  },
  {
    id: 43,
    name: "Erik Afriyuan M.E",
    instansi: "IAI Yaptip IC",
    status: "Hadir",
  },
  { id: 44, name: "Roqa Oka Putri", instansi: "DPPKMP3A", status: "Hadir" },
  { id: 45, name: "Yuliasma", instansi: "Disukcapil", status: "Hadir" },
  { id: 46, name: "Angga", instansi: "Setda", status: "Hadir" },
  { id: 47, name: "Delvi Elwina", instansi: "Disdik", status: "Hadir" },
  { id: 48, name: "Aldi", instansi: "Seasra", status: "Hadir" },
]

const DaftarHadir = () => {
  return (
    <section id="daftar-hadir" className="py-24">
      <div className="container mx-auto px-6">
        <div className="mb-8 flex flex-col justify-between md:flex-row">
          <div className="max-w-2xl">
            <h2 className="mb-2 text-sm font-bold tracking-wider text-orange-600 uppercase">
              Kehadiran
            </h2>
            <h3 className="text-3xl font-extrabold text-slate-900 md:text-4xl">
              Daftar Hadir
            </h3>
            <p className="mt-4 text-slate-600">
              Daftar kehadiran peserta pada kegiatan ini.
            </p>
          </div>
        </div>

        <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
          <Table className="min-w-[600px]">
            <TableCaption className="pb-4">
              Daftar hadir peserta terbaru.
            </TableCaption>
            <TableHeader className="bg-slate-50/50">
              <TableRow>
                <TableHead className="w-[60px] text-center font-semibold text-slate-600">
                  No.
                </TableHead>
                <TableHead className="font-semibold text-slate-600">
                  Nama
                </TableHead>
                <TableHead className="font-semibold text-slate-600">
                  Peran
                </TableHead>
                <TableHead className="text-center font-semibold text-slate-600">
                  Status
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {dummyData.map((item, index) => (
                <TableRow
                  key={item.id}
                  className="transition-colors hover:bg-slate-50"
                >
                  <TableCell className="text-center font-medium text-slate-600">
                    {index + 1}
                  </TableCell>
                  <TableCell className="font-medium text-slate-900">
                    {item.name}
                  </TableCell>
                  <TableCell className="text-slate-600">
                    {item.instansi}
                  </TableCell>
                  <TableCell className="text-center">
                    <span
                      className={`inline-flex items-center justify-center rounded-full px-3 py-1 text-xs font-semibold ${item.status === "Hadir" ? "bg-orange-100 text-orange-800" : "bg-rose-100 text-rose-800"}`}
                    >
                      {item.status}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  )
}

export default DaftarHadir
