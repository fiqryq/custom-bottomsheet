import { BottomSheet, Button } from "components";
import { Container } from "layout";
import { useState } from "react";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <Container>
      <Button
        label={open ? "Close Bottom Sheet" : "Open Bottom Sheet"}
        onClick={() => setOpen(!open)}
      />
      <BottomSheet open={open} title="title">
        {/* Penyaluran dana */}
        <div className="flex items-center space-x-2">
          <div className="h-5 w-5 cursor-pointer bg-[#E6F5FB]"></div>
          <h1 className="text-[16px] font-semibold">Penyaluran dana</h1>
        </div>
        <div className="my-4 w-full space-y-3 rounded-lg bg-[#E6F5FB] p-5">
          <div className="flex justify-between">
            <p>Dana terkumpul</p>
            <p className="font-semibold">Rp1.200.000.000</p>
          </div>
          <div className="flex justify-between">
            <p>Dana disalurkan*</p>
            <p className="font-semibold">Rp1.200.000.000</p>
          </div>
          <div className="flex justify-between">
            <p>Dana tersisa</p>
            <p className="font-semibold">Rp1.200.000.000</p>
          </div>
        </div>
        <div className="my-4 w-full space-y-3 rounded-lg bg-[#FFF8E8] p-5">
          <p>
            *Sudah termasuk biaya implementasi program, platform fee, admin
            bank, dll
          </p>
        </div>
        {/* Rendaca penggunaan dana */}
        <div className="flex items-center space-x-2">
          <div className="h-5 w-5 cursor-pointer bg-[#E6F5FB]"></div>
          <h1 className="text-[16px] font-semibold">Rencana Penggunaan Dana</h1>
        </div>

        <div className="flex justify-between border-b-[1px] py-4">
          <p>Target donasi</p>
          <p className="font-semibold">Rp1.200.000.000</p>
        </div>
        {/* Penerima manfaat lain */}
        <div className="my-3 flex items-center justify-between space-x-2">
          <div className="flex items-center space-x-2">
            <div className="h-5 w-5 cursor-pointer bg-[#E6F5FB]"></div>
            <h1 className="text-[16px] font-semibold">Penerima manfaat lain</h1>
          </div>
          <p className="font-semibold">Rp1.200.000.000</p>
        </div>
        <p>
          *Perkiraan dana yang disalurkan ke penerima manfaat lain setelah
          kebutuhan penerima manfaat utama tercukupi.
        </p>
        <div className="my-4 w-full space-y-3 rounded-lg bg-[#FFF8E8] p-5">
          <p>
            - Rencana penggunaan dana di atas sudah disetujui penggalang dana.{" "}
            <br /> - Total target dan penggunaan dana dapat berubah menyesuaikan
            kondisi dan kebutuhan selama galang dana berlangsung.
          </p>
        </div>

        <button
          className="bottom-0 w-full max-w-480 bg-sky-500 p-3 text-white"
          onClick={() => setOpen(!open)}
        >
          Close Button
        </button>
      </BottomSheet>
    </Container>
  );
}

export default App;
