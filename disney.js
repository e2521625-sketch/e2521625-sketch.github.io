document.addEventListener('DOMContentLoaded', () => {
    // 1. スムーズスクロール機能（ナビゲーションなどのページ内リンク用）
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]:not([href="#"])');
    
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // デフォルトの一瞬で飛ぶ動きを無効化
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // 対象の要素まで滑らかにスクロールする
                window.scrollTo({
                    top: targetElement.offsetTop - 20, // ヘッダー等の余白として20px分調整
                    behavior: 'smooth'
                });
            }
        });
    });

    // 2. 「ページのトップに戻る」ボタン用のスムーズスクロール
    const backToTopBtn = document.querySelector('a[href="#"]');
    
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', function(e) {
            e.preventDefault();
            // ページの最上部(top: 0)へ滑らかにスクロール
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});