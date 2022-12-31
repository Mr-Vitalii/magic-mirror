


let arr = ["Боюся, що одного разу просто осліпну, так як не можу відірвати погляд від твоїх чарівних очей.", "Пані Ірино Ви така витончена!", "Від твоєї краси темніють очі!", "Твоя природна доброта і чуйність вражають своїм розмахом, особливо в цьому жорсткому світі.", "Я без розуму від твоїх чарівних очей.Я тону в них як в озері.", "Пані Ірино Ваша краса унікальна, настільки чарівна, що будь - який художник взявся б писати з тебе картини.", "Ти чарівна і неймовірна!", "Світ став би набагато кращим, якщо більшість людей були б схожі на тебе.", "Ти цікава, красива, чарівна, оригінальна — просто родзинка! Тебе треба цінувати і берегти!", "Посміхайся частіше, у тебе чудова посмішка.", "Твоя усмішка – найпрекрасніша на світлі.", "Ти — дівчина, яка змінює Світ!", "Твоєї привабливості може позаздрити кожен.", "Твій голос - наче музика, а риси обличчя, як пейзажі красот природи!", "Навіть ангели заздрісно дивляться на тебе з небес, милуючись неземною красою!", "Ти – втілення мрії!", "Ти — рятівний еліксир в суєті міського життя!", "Ти красива, як богиня!", "Коли я дивлюся на тебе, я думаю, що краса врятує світ.", "Пані Ірина Ви неповторна! Ви — чарівна! Ви — неперевершена!", "Ти справжній ангел, тому що жінки не можуть бути такими красивими, як ти.", "Ти вище всіх похвал!", "Ти справжній джерело доброти, щастя і радості!", "Ти все робиш бездоганно і ідеально.", "Ти справжній скарб!", "Будь - яка кімната стає світліше, коли ти заходиш туди.", "Ти зірка, що впала з неба на землю!"];

(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-modal-open]"),
        closeModalBtn: document.querySelector("[data-modal-close]"),
        modal: document.querySelector("[data-modal]"),

        mirrorText: document.querySelector(".mirror__text"),
        block: document.querySelector('.block'),
        askButton: document.querySelector('.ask')
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.openModalBtn.addEventListener("click", showtext);
    refs.openModalBtn.addEventListener("click", hideBackground);
    refs.closeModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", showBackground);

    function toggleModal() {
        document.body.classList.toggle("modal-open");
        refs.modal.classList.toggle("backdrop--is-hidden");
        refs.mirrorText.removeAttribute('style');
    }

    function showtext() {
        refs.mirrorText.textContent = (arr[(Math.floor(Math.random() * (27 - 1) + 1))])
        refs.mirrorText.setAttribute("style", "animation: ani 2.5s forwards");
    }

    function hideBackground() {
        refs.block.style.display = "none";
        refs.askButton.style.display = "none";
    }
    function showBackground() {
        refs.block.style.display = "block";
        refs.askButton.style.display = "block";
    }

})();






