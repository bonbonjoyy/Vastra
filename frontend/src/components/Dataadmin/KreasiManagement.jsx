// src/components/Dataadmin/KreasiManagement.jsx
const KreasiManagement = ({ category }) => {
  const [images, setImages] = useState([]);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    fetchImages();
  }, [category]);

  const fetchImages = async () => {
    try {
      const response = await api.get(`/api/kreasi/${category}`);
      setImages(response.data);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);
    formData.append("category", category);

    setUploading(true);
    try {
      await api.post("/api/kreasi/upload", formData);
      fetchImages();
    } catch (error) {
      alert("Gagal upload gambar");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Kreasi Kategori {category}</h2>
        <div className="relative">
          <input
            type="file"
            accept="image/*"
            onChange={handleUpload}
            className="hidden"
            id="image-upload"
          />
          <label
            htmlFor="image-upload"
            className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-600"
          >
            Upload Gambar
          </label>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {images.map((image) => (
          <div key={image.id} className="relative group">
            <img
              src={image.url}
              alt={image.title}
              className="w-full h-48 object-cover rounded"
            />
            <button
              onClick={() => handleDelete(image.id)}
              className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded opacity-0 group-hover:opacity-100"
            >
              Hapus
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
