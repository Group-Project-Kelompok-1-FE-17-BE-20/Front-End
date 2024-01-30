import givSukser from '../img/sukses-transaksi.gif'

function DetailTransaksi() {
    return (
        <div className='w-full h-full flex-col justify-start items-center gap-12 flex mt-9'>
            <div className='w-96 h-96 relative bg-white rounded-2xl'>
                <div className='w-96 h-96 left-0 top-[47px] absolute flex-col justify-start items-center gap-12 inline-flex'>
                    <img src={givSukser} alt='' />
                    <div className='w-[600px] h-44 flex-col justify-start items-start gap-4 flex'>
                        <div className='self-stretch h-6 justify-between items-center inline-flex'>
                            <div className='text-left text-neutral-500 text-lg font-normal font-Poppins leading-normal'>
                                Nama Pengguna
                            </div>
                            <div className='text-right text-zinc-800 text-lg font-medium font-Poppins leading-normal'>
                                Bachtiar Putera A
                            </div>
                        </div>
                        <div className='self-stretch justify-between items-center inline-flex'>
                            <div className='text-left text-neutral-500 text-lg font-normal font-Poppins leading-normal'>
                                Alamat
                            </div>
                            <div className='text-right text-zinc-800 text-lg font-medium font-Poppins leading-normal'>
                                Jln budinmulya raya no 28 pademangan
                            </div>
                        </div>
                        <div className='self-stretch justify-between items-center inline-flex'>
                            <div className='text-left text-neutral-500 text-lg font-normal font-Poppins leading-normal'>
                                Metode Pembayaran
                            </div>
                            <div className='text-right text-zinc-800 text-lg font-medium font-Poppins leading-normal'>
                                KARTU DEBIT
                            </div>
                        </div>
                        <div className='self-stretch justify-between items-center inline-flex'>
                            <div className='text-left text-neutral-500 text-lg font-normal font-Poppins leading-normal'>
                                No Order
                            </div>
                            <div className='text-right text-zinc-800 text-opacity-50 text-lg font-medium font-Poppins leading-normal'>
                                xcewcnwckwnkowmnwow
                            </div>
                        </div>
                        <div className='self-stretch justify-between items-center inline-flex'>
                            <div className='text-left text-neutral-500 text-lg font-normal font-Poppins leading-normal'>
                                Total Pembayaran
                            </div>
                            <div className='text-right text-zinc-800 text-lg font-medium font-Poppins leading-normal'>
                                Rp 149.000
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-10 h-10 left-[616px] top-[20px] absolute' />
            </div>
        </div>
    );
}

export default DetailTransaksi;
