// p5 スケッチをロードして開始する関数
async function loadAndStartP5Sketch() {
  try {
    // 1. 'p5' ライブラリを動的にインポート
    const p5Module = await import('p5');
    const P5 = p5Module.default; // p5はデフォルトエクスポートされているため .default でアクセス

    // 2. 作成したスケッチ定義を動的にインポート
    const sketchModule = await import('./sketch');
    const mySketch = sketchModule.mySketch; // mySketch は名前付きエクスポートされている

    // 3. p5のインスタンスを作成し、スケッチを開始
    new P5(mySketch);

    console.log('p5 sketch loaded and started successfully!');
  } catch (error) {
    console.error('Failed to load or start p5 sketch:', error);
  }
}

// 例: ページロードから2秒後にスケッチを開始
// または、何らかの条件やユーザー操作に基づいてこの関数を呼び出す
setTimeout(loadAndStartP5Sketch, 2000);

// もしHTML内に特定のコンテナにスケッチを配置したい場合は、
// new P5(mySketch, 'your-container-id'); のように第二引数を追加してください。
// 例: new P5(mySketch, document.getElementById('p5-canvas-container') || undefined);
