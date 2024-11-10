const translations = {
    az: {
        title: "Zəkat Hesablayıcısı",
        lead: "İslamın beş şərtindən biri olan zəkatınızı hesablayın",
        gold: "Qızıl",
        cash: "Pul",
        investments: "Yatırımlar",
        properties: "Əmlaklar",
        trade: "Ticarət",
        others: "Digərləri",
        agriculture: "Əkinçilik",
        cattle: "İribuynuzlu Mal",
        gems: "Qiymətli Daşlar",
        debts: "Borclar",
        result: "Zəkat Nəticəsi",
        zakatAmount: "Ödənilməli olan zəkat məbləği:",
        modalTitle: "Zəkat Hesablayıcısı",
        modalContent: "Zəkatınızı hesablamaq üçün məlumatları daxil edin.",
        modals: {
            gold: "Qızıl zəkatı hesablamaq üçün qızılın dəyərini və ya çəkisini daxil edin. Zəkat nisabı 85 qram qızıldır.",
            cash: "Nağd pul, bank hesabları və digər likvid aktivlər üçün zəkat hesablanır. Nisab həddi qızılın dəyərinə bərabərdir.",
            investments: "Səhmlər, istiqrazlar və digər maliyyə alətləri üçün zəkat hesablanır. Zəkat nisabı qızılın dəyərinə bərabərdir.",
            properties: "Satış məqsədi ilə alınan əmlaklar üçün zəkat hesablanır. Şəxsi istifadə üçün olan əmlaklara zəkat düşmür.",
            trade: "Ticarət malları üçün zəkat hesablanır. Bu, satış üçün nəzərdə tutulmuş bütün malları əhatə edir.",
            others: "Digər zəkata tabe olan aktivləri buraya daxil edin. Əmin deyilsinizsə, bir din alimi ilə məsləhətləşin.",
            agriculture: "Əkinçilik məhsulları üçün zəkat fərqli hesablanır. Suvarma üsuluna görə 5% və ya 10% zəkat verilir.",
            cattle: "İribuynuzlu mal üçün zəkat xüsusi qaydalarla hesablanır. Heyvanların sayına görə zəkat miqdarı dəyişir.",
            gems: "Qiymətli daşlar üçün zəkat onların satış dəyəri əsasında hesablanır. Şəxsi istifadə üçün olan zinət əşyalarına zəkat düşmür.",
            debts: "Borclar ümumi zəkat məbləğindən çıxılır. Yalnız real borcları daxil edin."
        }
    },
    tr: {
        title: "Zekat Hesaplayıcısı",
        lead: "İslam'ın beş şartından biri olan zekatınızı hesaplayın",
        gold: "Altın",
        cash: "Nakit",
        investments: "Yatırımlar",
        properties: "Mülkler",
        trade: "Ticaret",
        others: "Diğerleri",
        agriculture: "Tarım",
        cattle: "Büyükbaş Hayvan",
        gems: "Değerli Taşlar",
        debts: "Borçlar",
        result: "Zekat Sonucu",
        zakatAmount: "Ödenmesi gereken zekat miktarı:",
        modalTitle: "Zekat Hesaplayıcısı",
        modalContent: "Zekatınızı hesaplamak için bilgileri girin.",
        modals: {
            gold: "Altın zekatı hesaplamak için altının değeri veya ağırlığını girin. Zekat nisabı 85 gram altındır.",
            cash: "Nakit, banka hesapları ve diğer likit varlıklar için zekat hesaplanır. Nisab sınırı altının değerine eşittir.",
            investments: "Hisse senetleri, tahviller ve diğer finansal araçlar için zekat hesaplanır. Zekat nisabı altının değerine eşittir.",
            properties: "Satış amacıyla alınan mülkler için zekat hesaplanır. Kişisel kullanım için olan mülklere zekat düşmez.",
            trade: "Ticaret malları için zekat hesaplanır. Bu, satış için ayrılmış tüm malları kapsar.",
            others: "Diğer zekata tabi varlıkları buraya ekleyin. Emin değilseniz bir din alimi ile danışın.",
            agriculture: "Tarım ürünleri için zekat farklı hesaplanır. Sulama şekline göre %5 veya %10 zekat verilir.",
            cattle: "Büyükbaş hayvanlar için zekat özel kurallarla hesaplanır. Hayvan sayısına göre zekat miktarı değişir.",
            gems: "Değerli taşlar için zekat, satış değeri üzerinden hesaplanır. Kişisel kullanım için olan mücevherlere zekat düşmez.",
            debts: "Borçlar, toplam zekat miktarından düşülür. Sadece gerçek borçları girin."
        }
    }
    
};

function changeLanguage() {
    const selectedLanguage = document.getElementById('languageSelect').value;
    document.title = translations[selectedLanguage].title;
    document.querySelector('.lead').textContent = translations[selectedLanguage].lead;
    document.querySelector('legend').textContent = translations[selectedLanguage].gold;

    // Update other elements similarly...
    // Example for result section
    document.getElementById('result').querySelector('h2').textContent = translations[selectedLanguage].result;
    document.getElementById('zakatAmount').textContent = translations[selectedLanguage].zakatAmount;

    // Update modal content
    document.getElementById('modalTitle').textContent = translations[selectedLanguage].modalTitle;
    document.getElementById('modalContent').textContent = translations[selectedLanguage].modalContent;
}