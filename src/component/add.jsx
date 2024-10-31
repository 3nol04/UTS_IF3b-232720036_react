import { useState } from 'react';
import axios from 'axios';

const Add = () => {
    const [title, setTitle] = useState('');
    const [penulis, setPenulis] = useState('');
    const [tahun, setTahun] = useState('');

    const handlePost = async (e) => {
        e.preventDefault(); // Prevent the default form submission

        try {
            const response = await axios.post('https://uts-if-3-b-2327250036-api-hcyc.vercel.app/api/api/artiles/add', {
                judul: title,
                penulis: penulis,
                tahun: tahun,
            }
        );
        window.location.href = '/';

            console.log(response.data);
            
            setTitle('');
            setPenulis('');
            setTahun('');
        } catch (error) {
            console.error('Error adding article:', error);
        }
    };

    return (
        <>
            <h1>Add Article</h1>
            <form onSubmit={handlePost}>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Penulis"
                    value={penulis}
                    onChange={(e) => setPenulis(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Tahun"
                    value={tahun}
                    onChange={(e) => setTahun(e.target.value)}
                    required
                />
                <button type="submit">Submit</button>
            </form>
        </>
    );
};

export default Add;
