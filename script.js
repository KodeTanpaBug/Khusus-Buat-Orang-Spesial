document.addEventListener('DOMContentLoaded', function() {
    const originalCardStates = {};
    const cardContainer = document.querySelector('.card-container');

    // Store the initial state of all cards
    document.querySelectorAll('.card').forEach(card => {
        if (card.id) {
            originalCardStates[card.id] = {
                html: card.innerHTML,
                justifyContent: card.style.justifyContent,
                alignItems: card.style.alignItems,
                textAlign: card.style.textAlign,
            };
        }
    });

    const messages = {
        'button-1': {
            text: "Kuenya cuma gambar, tapi doanya full HD 4K — sehat, happy, dan makin sayang aku tiap hari 🐼✨🎉",
            gif: "https://media.tenor.com/p8BPYgyQPvcAAAAM/happy-birthday.gif"
        },
        'button-2': {
            text: "Boongnya manis, kayak kamu waktu lagi ngambek 🥹🌹 Yuk maafin, nanti tak traktir peluk virtual edisi premium!",
            gif: "https://media.tenor.com/gtCplcXtC58AAAAM/milk-mocha.gif"
        },
        'button-3': {
            text: "Beruangnya sih tidur, tapi hatiku siaga! Kamu sedih dikit, langsung tak lempar meme lucu level guling-guling 🤣🐻",
            gif: "https://i.pinimg.com/originals/a3/96/3a/a3963a62684a02763cb11aa9330cd3b1.gif"
        },
        'button-4': {
            text: "GPS-nya error, tapi niatnya lurus ke kamu. Kalau kangen ini mogok, peluk aja... langsung nyala lagi 🥹❤️",
            gif: "https://i.pinimg.com/originals/72/6e/57/726e574be1a8370f3d41f7d994da45f3.gif"
        },
        'button-5': {
            text: "Kalau gejalanya mulai senyum-senyum sendiri, artinya dosis cinta dari aku udah mulai bekerja 😎💉💗",
            gif: "https://media.tenor.com/JIao9omPiF8AAAAj/cute-panda.gif"
        },
        'button-6': {
            text: "Kalau ini terakhir, artinya kamu siap masuk part dua: pelukan, rayuan, dan hadiah editan muka lucu bareng 🥰📦📸",
            gif: "https://i.pinimg.com/originals/d3/48/e4/d348e4401884dd1bb421bbe513fa54a7.gif"
        }
    };

    cardContainer.addEventListener('click', function(event) {
        const target = event.target;
        const cardElement = target.closest('.card');

        if (!cardElement) {
            return;
        }

        // Handle "Liat" clicks
        if (target.tagName === 'BUTTON' && !target.classList.contains('back-button')) {
            const messageData = messages[target.id];

            if (messageData) {
                const newHtmlContent = `
                    <img src="${messageData.gif}" alt="Gift" style="width: 130px; height: 130px; object-fit: contain; border-radius: 10px; margin-bottom: 15px;">
                    <p style="font-size: 0.9rem; color: #555; margin: 0; padding: 0 10px;">${messageData.text}</p>
                `;
                cardElement.innerHTML = newHtmlContent + `<button class="back-button" data-cardid="${cardElement.id}">Kembali</button>`;
                cardElement.style.justifyContent = 'center';
                cardElement.style.alignItems = 'center';
                cardElement.style.textAlign = 'center';
            }
        }

        // Handle "Kembali" button click
        if (target.classList.contains('back-button')) {
            const cardId = target.dataset.cardid;
            const originalState = originalCardStates[cardId];
            if (cardElement && originalState) {
                cardElement.innerHTML = originalState.html;
                cardElement.style.justifyContent = originalState.justifyContent;
                cardElement.style.alignItems = originalState.alignItems;
                cardElement.style.textAlign = originalState.textAlign;
            }
        }
    });
}); 