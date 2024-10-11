const data = [
    {
        id: 1,
        title: "Para Hakkında",
        content: "Bütün tasarruf ve vadesiz hesaplarda bulunan nakit bakiyeler ve banka bakiyeleri için ödenmesi gereken Zekat, %2,5 oranında olmalıdır. Teknik olarak bu paranın bankada 1 zekat yılı boyunca kalması gerekmektedir. Genellikle kişisel ihtiyaçlara bağlı olarak bakiye değişmektedir. Hesaplamanın yapıldığı gün mümkün olan en iyi ihtimale göre hesaplanarak en iyi ödeme şekli seçilmektedir.",
        gridLabels: ["Peşin", "Banka hesabındaki para"],
    },
    {
        id: 2,
        title: "Yapılan yatırımlar Hakkında",
        content: "Zekat, ya firma ya da ayrı ayrı sahipler tarafından ödenebilir. Eğer firma ödeme yapmıyorsa, iş ortağı kendi payını hesaplamak için kendine ait sermaye ve borç hesabını almalıdır.",
        gridLabels: ["Paylaşımlar", "Diğer yatırımlar"],
    },
    {
        id: 3,
        title: "Mülk Hakkında",
        content: "Ticaret için kullanılmayan evin, birkaç eviniz olsa bile, değeri için zekat verilmez. Kiraya verilen evin zekatı, bu evlerin değeri üzerinden değil, tamir ve diğer masraflar çıkarıldıktan sonra kalan kira geliri üzerinden hesaplanır. Eğer niyetiniz mallarınızı elde tutup gelecekte satmak veya yatırım yapmak ise, yalnız bu durumda zekat malın piyasa değeri üzerinden hesaplanır. Eğer mevcut yıl içinde niyetiniz önce kişisel kullanım, sonradan ticaret amaçlı olarak değişirse, bu durumda zekat malın piyasa değeri üzerinden hesaplanır.",
        gridLabels: ["Kira geliri", "Mülkler"],
    },
    {
        id: 4,
        title: "Ticaret Hakkında",
        content: "Bu bölüm sadece ticaretle uğraşanlar içindir. Hangi sektörde çalıştığınızdan bağımsız olarak, tüm TİCARET MALLARI için zekat ödemeniz gerekmektedir. Malın değeri belirlenirken, teslimat masrafları da eklenerek alıcının ödediği fiyatla hesaplanmalıdır. Herhangi bir vadeli satış varsa onu da hesaba katmalısınız.",
        gridLabels: ["Ticari para", "Mallar, hisseler"],
    },
    {
        id: 5,
        title: "Diğerleri Hakkında",
        content: "Arkadaşlara veya akrabalara verilen borç üzerinden (verilen borcun geri ödeneceğinden eminseniz) zekat verebilirsiniz. Bu durumda verilen borç para, eldeki nakit para olarak değerlendirilmelidir. Ödeyeceğiniz borçları mal varlığınızdan düşerek, varlığınızın şu anki net değerini hesaplayabilirsiniz. Fakat, eğer bu paranın size geri geleceği konusunda bir şüpheniz varsa o zaman bunu varlığınızdan saymanız gerekmez. Bu parayı geri alırsanız, aldığınız zaman bunu varlığınıza ekleyebilirsiniz.",
        gridLabels: ["Emeklilik", "Aile ve diğerlerine verilen borçlar", "Diğer varlıklar"],
    }
];


const container = document.getElementById("container");

data.forEach((item, index) => {
    const section = document.createElement("div");
    let gridContent = "";

    item.gridLabels.forEach((label) => {
        gridContent += `
                <div class="flex items-center col-start-1 col-end-3 p-3">
                    <p class="text-xl underline">${label}</p>
                </div>
                <div class="flex items-center col-start-3 col-span-4 p-3">
                    <input type="number" id="priceInput${index}" min="0" class="priceInput mt-1 block w-full px-3 py-2 bg-white border border-green-500 rounded-md text-sm shadow-sm placeholder-green-400 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500">
                </div>
            `;
    });

    section.innerHTML = `
            <div class="my-4 mb-6 border rounded-md border-gray-950 p-4">
                <div class="flex items-center justify-center gap-4">
                    <h1 class="text-3xl text-center font-bold">${item.title}</h1>
                    <button class="text-2xl cursor-pointer" onclick="openPopup(${index})">
                        <i class="fa-solid fa-circle-info"></i>
                    </button>
                </div>
                <div class="grid grid-cols-6 gap-4">
                    ${gridContent}
                    <div class="flex items-center col-start-1 col-end-7 p-3">
                        <p class="mx-3 text-3xl font-bold">Toplam: </p>
                        <input type="number" id="sumInput${index}" min="0" class="sumInput mt-1 block w-full px-3 py-2 bg-white border border-blue-500 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" readonly>
                    </div>
                    <div class="flex items-center col-start-1 col-end-7 p-3">
                        <p class="mx-3 text-3xl font-bold">Zekat: </p>
                        <input type="number" id="zekatInput${index}" min="0" class="zekatInput mt-1 block w-full px-3 py-2 bg-white border border-blue-500 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" readonly>
                    </div>
                </div>
            </div>
            <div id="popup${index}" class="popup">
                <div class="popup-content border rounded-md">
                    <span class="close" onclick="closePopup('popup${index}')">&times;</span>
                    <h2 class="text-xl text-center font-bold">${item.title}</h2>
                    <p class="mt-4">${item.content}</p>
                </div>
            </div>
        `;

    container.appendChild(section);

    const priceInputs = section.querySelectorAll(".priceInput");
    priceInputs.forEach(input => {
        input.addEventListener('input', () => {
            calculateCategoryTotalAndZakat(index);
            updateFooterTotals();
        });
    });
});

const footer = document.querySelector("footer");
footer.innerHTML = `
    <div class="container mx-auto py-4 px-10 mt-8">
        <div class="flex items-center justify-center bg-green-600 p-3  mx-2 border rounded-md">
            <p class="sumTitle text-2xl mx-1">Toplam Varlık : </p>
            <p class="sumPrice text-2xl mx-1">0</p>
        </div>
        <div class="flex items-center justify-center bg-yellow-600 p-3  mx-2 border rounded-md">
            <p class="zekaTitle text-2xl mx-1">Münasip Zekat : </p>
            <p class="zekatPrice text-2xl mx-1">0</p>
        </div>
    </div>
`;


function calculateCategoryTotalAndZakat(index) {
    const section = document.getElementById(`container`).children[index];
    const priceInputs = section.querySelectorAll(".priceInput");
    let sum = 0;

    priceInputs.forEach(input => {
        const value = parseFloat(input.value) || 0;
        sum += value;
    });

    const sumInput = document.getElementById(`sumInput${index}`);
    const zakatInput = document.getElementById(`zekatInput${index}`);

    sumInput.value = sum.toFixed(2);
    zakatInput.value = (sum * 0.025).toFixed(2);
}

function updateFooterTotals() {
    let totalSum = 0;
    let totalZakat = 0;

    const sumInputs = document.querySelectorAll(".sumInput");
    const zakatInputs = document.querySelectorAll(".zekatInput");

    sumInputs.forEach(input => {
        totalSum += parseFloat(input.value) || 0;
    });

    zakatInputs.forEach(input => {
        totalZakat += parseFloat(input.value) || 0;
    });

    document.querySelector(".sumPrice").textContent = totalSum.toFixed(2);
    document.querySelector(".zekatPrice").textContent = totalZakat.toFixed(2);
}


// ******************************************************** Popup function ******************************************************** \\

function openPopup(index) {
    const popupId = `popup${index}`;
    document.getElementById(popupId).style.display = "flex";
}

function closePopup(popupId) {
    document.getElementById(popupId).style.display = "none";
}

window.onclick = function (event) {
    const popups = document.querySelectorAll(".popup");
    popups.forEach((popup) => {
        if (event.target === popup) {
            closePopup(popup.id);
        }
    });
};
