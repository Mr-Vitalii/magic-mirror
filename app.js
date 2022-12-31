


let arr = ["Пані Ірино, боюся, що одного разу просто осліпну, так як не можу відірвати погляд від твоїх чарівних очей.", "Пані Ірино Ви така витончена!", "Від Вашої краси темніють очі!", "Пані Ірино,Ваша природна доброта і чуйність вражають своїм розмахом, особливо в цьому жорсткому світі.", "Всі наколо без розуму від Ваших чарівних очей.", "Пані Ірино, Ваша краса унікальна, настільки чарівна, що будь - який художник взявся б писати з тебе картини.", "Ви чарівна і неймовірна!", "Світ став би набагато кращим, якщо більшість людей були б схожі на Вас.", "Ви цікава, красива, чарівна, оригінальна — просто родзинка! Вас треба цінувати і берегти!", "Посміхайтеся частіше, у Вас чудова посмішка.", "Ваша усмішка – найпрекрасніша на світлі.", "Ви — дівчина, яка змінює Світ!", "Вашої привабливості може позаздрити кожен.", "Пані Ірино, голос - наче музика, а риси обличчя, як пейзажі красот природи!", "Навіть ангели заздрісно дивляться на Вас з небес, милуючись неземною красою!", "Ви – втілення мрії!", "Ви — рятівний еліксир в суєті міського життя!", "Пані Ірино, Ви красива, як богиня!", "Коли люди дивляться на Вас, вони думають, що краса врятує світ.", "Пані Ірино, Ви неповторна! Ви — чарівна! Ви — неперевершена!", "Ви справжній ангел, тому що жінки не можуть бути такими красивими, як Ви.", "Ви вище всіх похвал!", "Пані Ірино, Ви справжній джерело доброти, щастя і радості!", "Ви все робите бездоганно і ідеально.", "Ви справжній скарб!", "Будь - яка кімната стає світліше, коли Ви заходите туди.", "Ви зірка, що впала з неба на землю!"];

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
        refs.block.style.display = "flex";
        refs.askButton.style.display = "block";
    }

})();






