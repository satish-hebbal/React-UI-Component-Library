import React, { useState } from 'react';

const FileUpload = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState("");

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile && selectedFile.size > 5 * 1024 * 1024) {
            setError("Too big");
            setFile(null);
        } else {
            setError("");
            setFile(selectedFile);
        }
    };

    const handleFileRemove = () => {
        setFile(null);
        setError("");
    };

    const displayFileName = file && file.name.length > 15 
        ? file.name.slice(0, 15) + '...' 
        : file ? file.name : "No file selected";

    return (
        <div className="flex flex-col gap-2 items-start w-96">
            <label className="flex relative w-full h-12 rounded-md ring-2 bg-white ring-gray-200 items-center justify-between cursor-pointer">
                <span className="text-gray-600 h-8 ml-2 px-4 py-1 rounded-md bg-orange-200">Choose File</span>
                <input
                    type="file"
                    className="absolute inset-0 opacity-0 cursor-pointer"
                    onChange={handleFileChange}
                />
                <span className="flex-grow text-gray-500 truncate px-4">
                    {displayFileName}
                </span>
                {file && (
                    <button
                        type="button"
                        onClick={handleFileRemove}
                        className="text-gray-600 hover:text-red-500 pr-4"
                    >
                        &times;
                    </button>
                )}
            </label>
            {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
        </div>
    );
};

export default FileUpload;
