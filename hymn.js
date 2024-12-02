// Hymns data (you can fetch this from a separate JSON or import from your document)
const hymns = [
    { number: '001', title: 'Watch therefore, for ye know not what hour your Lord doth come', audio: 'Watch therefore, for ye know not what hour your Lord doth come.mp3' },
    { number: '002', title: 'Behold the Bridegroom cometh, go ye out to meet Him Matt 25:6', audio: 'Behold the Bridegroom cometh, go ye out to meet Him Matt 25:6.mp3' },
    { number: '003', title: 'Who is this King of glory', audio: 'Who is this King of glory.mp3' },
    { number: '004', title: 'I will come again and receive you unto myself. Joh.14:3', audio: 'I will come again and receive you unto myself. Joh.14:3.mp3' },
    { number: '005', title: 'Behold He cometh with clouds. Rev.1:7', audio: 'Behold He cometh with clouds. Rev.1:7.mp3' },
    { number: '006', title: 'Behold what manner of love the Father hath bestowed upon us that we should be called the children of God 1 John 3:1', audio: 'Behold what manner of love the Father hath bestowed upon us that we should be called the children of God 1 John 3:1.mp3' },
    { number: '007', title: 'For He cometh to Judge the earth ', audio: 'For He cometh to Judge the earth .mp3' },
    { number: '008', title: 'Today if ye will hear his voice, harden not your hearts. 	Heb.4:7', audio: 'Today if ye will hear his voice, harden not your hearts. 	Heb.4:7.mp3' },
    { number: '009', title: 'When he looketh upon it, shall live. Num 21: 8', audio: 'When he looketh upon it, shall live. Num 21: 8.mp3' },
    { number: '010', title: 'For the gifts and calling of God are without repentance. Rom11:29', audio: 'For the gifts and calling of God are without repentance. Rom11:29.mp3' },
    { number: '011', title: 'When he looketh upon it, shall live. Num.21:8', audio: 'When he looketh upon it, shall live. Num.21:8.mp3' },
    { number: '012', title: 'Come unto me all ye that labour and heavy laden and I will give you rest. Matt.11:28', audio: 'Come unto me all ye that labour and heavy laden and I will give you rest. Matt.11:28.mp3' },
    // Add remaining hymns here
];

const hymnsList = document.getElementById('hymnsList');
const searchBar = document.getElementById('searchBar');

// Function to render hymns
function renderHymns(filteredHymns = hymns) {
    hymnsList.innerHTML = filteredHymns.map(hymn => `
        <div class="bg-white rounded-md shadow p-4 text-center">
            <h2 class="text-xl font-bold">Hymn ${hymn.number}</h2>
            <p class="text-gray-700 italic">${hymn.title}</p>
            <audio controls class="mt-2">
                <source src="${hymn.audio}" type="audio/mp3">
                Your browser does not support the audio element.
            </audio>
        </div>
    `).join('');
}

// Filter hymns based on search
searchBar.addEventListener('input', () => {
    const query = searchBar.value.toLowerCase();
    const filteredHymns = hymns.filter(hymn => 
        hymn.title.toLowerCase().includes(query) || hymn.number.includes(query)
    );
    renderHymns(filteredHymns);
});

// Initialize hymns
renderHymns();
