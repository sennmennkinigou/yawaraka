//検索実行
function search(){
    document.cookie = "keywords=;max-age=0";

  //取得して、location?q=
    let keywords= document.getElementById("keywords").value;
  //「ｶﾀｶﾅ１２３ＡＢＣ」
  //英数を半角に！！
    keywords = moji(keywords).convert("ZEtoHE").toString();
        ////alert(`キーワード「${keywords}」の英数を半角にしました`);
  //カタカナを全角に！！
    keywords = moji(keywords).convert("HKtoZK").toString();
        ////alert(`キーワード「${keywords}」のカタカナを全角にしました`);
  //とりあえずdecode、encodeを無視して進めます。
        ////alert(`エンコードしました！！「${encodeURI(keywords)}」`);
    location.href = `index.html?q=${encodeURI(keywords)}`;
}

//戻るボタン
function get_back(){
  if(history.length == 1){
    location.href = "index.html"
  }else{
    history.back();
  }  
}