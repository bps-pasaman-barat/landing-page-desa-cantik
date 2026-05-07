import React from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const dummyData = [
  { id: 1, name: "John Doe", role: "Peserta", status: "Hadir", time: "08:00" },
  { id: 2, name: "John Doe", role: "Peserta", status: "Hadir", time: "08:15" },
  { id: 3, name: "Joh Doe", role: "Panitia", status: "Hadir", time: "07:30" },
  { id: 4, name: "John Doe", role: "Peserta", status: "Tidak Hadir", time: "-" },
  { id: 5, name: "John Doe", role: "Peserta", status: "Hadir", time: "08:05" },
];

const DaftarHadir = () => {
    return (
        <section id="daftar-hadir" className="py-24">
            <div className="container mx-auto px-6">
                <div className="mb-8 flex flex-col justify-between md:flex-row">
                    <div className="max-w-2xl">
                        <h2 className="mb-2 text-sm font-bold tracking-wider text-emerald-600 uppercase">
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
                
                <div className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-x-auto">
                    <Table className="min-w-[600px]">
                        <TableCaption className="pb-4">Daftar hadir peserta terbaru.</TableCaption>
                        <TableHeader className="bg-slate-50/50">
                            <TableRow>
                                <TableHead className="w-[60px] text-center font-semibold text-slate-600">No.</TableHead>
                                <TableHead className="font-semibold text-slate-600">Nama</TableHead>
                                <TableHead className="font-semibold text-slate-600">Peran</TableHead>
                                <TableHead className="font-semibold text-slate-600 text-center">Status</TableHead>
                                <TableHead className="text-right font-semibold text-slate-600">Waktu Kehadiran</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {dummyData.map((item, index) => (
                                <TableRow key={item.id} className="hover:bg-slate-50 transition-colors">
                                    <TableCell className="text-center font-medium text-slate-600">{index + 1}</TableCell>
                                    <TableCell className="font-medium text-slate-900">{item.name}</TableCell>
                                    <TableCell className="text-slate-600">{item.role}</TableCell>
                                    <TableCell className="text-center">
                                        <span className={`inline-flex items-center justify-center rounded-full px-3 py-1 text-xs font-semibold ${item.status === 'Hadir' ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'}`}>
                                            {item.status}
                                        </span>
                                    </TableCell>
                                    <TableCell className="text-right text-slate-600 font-medium">{item.time}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </section>
    );
}

export default DaftarHadir;
