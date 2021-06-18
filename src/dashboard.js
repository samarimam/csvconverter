import React from 'react';
import file1 from './addresses.csv';
import file2 from './Airtravel.csv';

function Dashboard() {
    return (
        <div>
            <a href={file1} without rel="noopener noreferrer" target="_blank" >
                <button trailingIcon="picture_as_pdf" label="Resume">
                    File 1
                </button>
            </a>
            <a href={file2} without rel="noopener noreferrer" target="_blank">
                <button trailingIcon="picture_as_pdf" label="Resume">
                    File 2
                </button>
            </a>
            <h1>Dashboard</h1>
        </div>
    )
}

export default Dashboard
