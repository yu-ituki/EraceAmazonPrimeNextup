window.addEventListener("load", main, false);

function main(e) {
    // ページに行ったら1秒ごとに監視.
    const jsInitCheckTimer = setInterval(onUpdate, 1000);
    function onUpdate() {
        // ファッキンNextup野郎が出てくるまで検索.
        var nextupCards = document.querySelectorAll('.atvwebplayersdk-nextupcard-wrapper'); 
        if ( nextupCards == undefined )
            return;
        // 居たら全員殺す.
        var isErased = false;
        nextupCards.forEach( 
            (card) => {
                if ( card == undefined )
                    return;
                card.remove();
                isErased = true;
            }
        );
    
        // 死んだのを確認したらタイマー解除.
        // （復活や時間差生成は無いと祈っている）.
        if ( isErased )
            clearInterval(jsInitCheckTimer);
    }
};
