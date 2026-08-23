(() => {
  "use strict";
  const CONTENT = {"schema":"DPRO-TUTORIAL-CONTENT-PACKAGE-V1.1","content_version":"EYE-R2-CANONICAL-V2.0-SOURCE-REFRESH","date":"2026-08-22","counts":{"categories":8,"articles":32,"faqs":15,"first10_chapters":6,"first10_cards":15},"categories":[{"id":"CAT-START","name":"はじめに・ログイン"},{"id":"CAT-RES","name":"予約・当日運用"},{"id":"CAT-IPAD","name":"店舗iPad・施術"},{"id":"CAT-CUST","name":"顧客・会員・再予約"},{"id":"CAT-FOLLOW","name":"再来店フォロー"},{"id":"CAT-SET","name":"店舗設定"},{"id":"CAT-CUSTOMER","name":"お客様側の操作"},{"id":"CAT-SAFE","name":"安全・困った時"}],"articles":[{"id":"ART-001","category_id":"CAT-START","title":"オーナー管理画面を開く","summary":"管理画面の開始地点とログイン方法を確認します。","feature_link":"https://dpromstk2000-lab.github.io/dpro-eye-salon-line/owner.html","steps":["owner.htmlを開く","管理コード欄を確認する","開いたら「今日の予約」を起点にする"],"safety":["チュートリアルは操作を自動確定しない"]},{"id":"ART-002","category_id":"CAT-START","title":"店舗iPadを開く","summary":"来店後の施術進行を扱う店舗iPadの入口です。","feature_link":"https://dpromstk2000-lab.github.io/dpro-eye-salon-line/owner-ipad.html","steps":["owner-ipad.htmlを開く","管理コード欄を確認する","対象日を確認する"],"safety":["チュートリアルは操作を自動確定しない"]},{"id":"ART-003","category_id":"CAT-START","title":"PC・iPad・お客様画面の使い分け","summary":"各画面の役割を整理します。","feature_link":"https://dpromstk2000-lab.github.io/dpro-eye-salon-line/owner.html","steps":["PC=予約/顧客/フォロー","iPad=施術進行/カルテ/写真","お客様画面=LINE予約/予約確認"],"safety":["チュートリアルは操作を自動確定しない"]},{"id":"ART-004","category_id":"CAT-RES","title":"今日の予約を確認する","summary":"本日の予約件数と来店状況を確認します。","feature_link":"https://dpromstk2000-lab.github.io/dpro-eye-salon-line/owner.html","steps":["今日の予約を開く","KPIを見る","予約カードを確認する"],"safety":["チュートリアルは操作を自動確定しない"]},{"id":"ART-005","category_id":"CAT-RES","title":"予約カードの見方","summary":"時間・顧客・メニュー・担当・状態を確認します。","feature_link":"https://dpromstk2000-lab.github.io/dpro-eye-salon-line/owner.html","steps":["予約カードを開く","表示項目を確認する","必要な次操作を判断する"],"safety":["チュートリアルは操作を自動確定しない"]},{"id":"ART-006","category_id":"CAT-RES","title":"電話・店頭・Instagramの予約を登録する","summary":"LINE以外の予約を同じ台帳へ登録する流れです。","feature_link":"https://dpromstk2000-lab.github.io/dpro-eye-salon-line/owner.html","steps":["電話・店頭予約を開く","受付経路を選ぶ","顧客/メニュー/日時を確認","内容を確認して利用者が登録する"],"safety":["チュートリアルは操作を自動確定しない"]},{"id":"ART-007","category_id":"CAT-RES","title":"受付経路を正しく残す","summary":"電話・Instagram・店頭・オーナー入力を区別して記録します。","feature_link":"https://dpromstk2000-lab.github.io/dpro-eye-salon-line/owner.html","steps":["受付経路欄を見る","該当する経路を選ぶ","登録前に再確認する"],"safety":["チュートリアルは操作を自動確定しない"]},{"id":"ART-008","category_id":"CAT-RES","title":"空き時間と30分枠の考え方","summary":"予約枠は30分単位で扱われます。","feature_link":"https://dpromstk2000-lab.github.io/dpro-eye-salon-line/index.html","steps":["希望日を選ぶ","担当条件を確認する","表示された空き時間から選ぶ"],"safety":["チュートリアルは操作を自動確定しない"]},{"id":"ART-009","category_id":"CAT-IPAD","title":"対象日の予約を選ぶ","summary":"店舗iPadで当日の予約を選択します。","feature_link":"https://dpromstk2000-lab.github.io/dpro-eye-salon-line/owner-ipad.html","steps":["対象日を確認する","予約一覧から対象者を選ぶ","顧客情報と予約内容を確認する"],"safety":["チュートリアルは操作を自動確定しない"]},{"id":"ART-010","category_id":"CAT-IPAD","title":"施術ステータスを進める","summary":"予約確定から施術完了までの状態を理解します。","feature_link":"https://dpromstk2000-lab.github.io/dpro-eye-salon-line/owner-ipad.html","steps":["現在状態を確認","次の状態ボタンを確認","利用者が内容を確認して更新"],"safety":["チュートリアルは操作を自動確定しない"]},{"id":"ART-011","category_id":"CAT-IPAD","title":"カルテを新規入力する","summary":"今回の施術カルテを予約単位で記録します。","feature_link":"https://dpromstk2000-lab.github.io/dpro-eye-salon-line/owner-ipad.html","steps":["カルテ入力タブを開く","今回内容を入力","前回カルテを上書きしない","利用者が保存"],"safety":["チュートリアルは操作を自動確定しない","実顧客写真・センシティブ情報を教材に使わない"]},{"id":"ART-012","category_id":"CAT-IPAD","title":"施術写真を扱う","summary":"施術写真の登録と安全上の注意です。","feature_link":"https://dpromstk2000-lab.github.io/dpro-eye-salon-line/owner-ipad.html","steps":["施術写真タブを開く","対象予約を確認","店舗運用時のみ実顧客写真を扱う","教材・マニュアルには実写真を使わない"],"safety":["チュートリアルは操作を自動確定しない","実顧客写真・センシティブ情報を教材に使わない"]},{"id":"ART-013","category_id":"CAT-IPAD","title":"過去のカルテ・履歴を見る","summary":"過去の施術履歴を確認して今回の施術に活かします。","feature_link":"https://dpromstk2000-lab.github.io/dpro-eye-salon-line/owner-ipad.html","steps":["履歴タブを開く","過去記録を確認","必要情報だけ参照する"],"safety":["チュートリアルは操作を自動確定しない","実顧客写真・センシティブ情報を教材に使わない"]},{"id":"ART-014","category_id":"CAT-IPAD","title":"施術完了までの店頭フロー","summary":"来店から会計待ち・施術完了までを一連で確認します。","feature_link":"https://dpromstk2000-lab.github.io/dpro-eye-salon-line/owner-ipad.html","steps":["来店","カウンセリング","施術開始","仕上げ","会計待ち","施術完了"],"safety":["チュートリアルは操作を自動確定しない"]},{"id":"ART-015","category_id":"CAT-CUST","title":"顧客を検索する","summary":"氏名・電話番号・顧客番号で顧客を探します。","feature_link":"https://dpromstk2000-lab.github.io/dpro-eye-salon-line/owner.html","steps":["顧客検索・カルテを開く","検索条件を入力","対象顧客を選ぶ"],"safety":["チュートリアルは操作を自動確定しない"]},{"id":"ART-016","category_id":"CAT-CUST","title":"顧客カルテを確認する","summary":"顧客の予約・施術情報を確認します。","feature_link":"https://dpromstk2000-lab.github.io/dpro-eye-salon-line/owner.html","steps":["対象顧客を開く","予約/カルテ情報を確認","必要な業務へ戻る"],"safety":["チュートリアルは操作を自動確定しない","実顧客写真・センシティブ情報を教材に使わない"]},{"id":"ART-017","category_id":"CAT-CUST","title":"前回と同じ内容で予約する仕組み","summary":"過去予約を使った再予約導線を理解します。","feature_link":"https://dpromstk2000-lab.github.io/dpro-eye-salon-line/member.html","steps":["会員ページの履歴を見る","同じ内容で予約を選ぶ","メニュー/担当/おすすめ日を確認"],"safety":["チュートリアルは操作を自動確定しない"]},{"id":"ART-018","category_id":"CAT-CUST","title":"予約確認・日時変更・キャンセル申請","summary":"お客様側でできる予約管理を確認します。","feature_link":"https://dpromstk2000-lab.github.io/dpro-eye-salon-line/member.html","steps":["次回予約を見る","日時変更は空き時間を選ぶ","キャンセルは申請として受け付ける"],"safety":["チュートリアルは操作を自動確定しない"]},{"id":"ART-019","category_id":"CAT-FOLLOW","title":"再来店フォローを確認する","summary":"再来店目安に応じた候補を確認します。","feature_link":"https://dpromstk2000-lab.github.io/dpro-eye-salon-line/owner.html","steps":["再来店フォローを開く","優先度を見る","対象顧客を確認"],"safety":["チュートリアルは操作を自動確定しない"]},{"id":"ART-020","category_id":"CAT-FOLLOW","title":"次回予約済みを送信対象外にする理由","summary":"すでに次回予約がある顧客への重複フォローを避けます。","feature_link":"https://dpromstk2000-lab.github.io/dpro-eye-salon-line/owner.html","steps":["次回予約済みカテゴリを確認","通常フォロー文面が出ないことを理解","誤送信を避ける"],"safety":["チュートリアルは操作を自動確定しない"]},{"id":"ART-021","category_id":"CAT-FOLLOW","title":"フォロー対応状況を整理する","summary":"本日目安・期限超過・長期・対応完了などを見分けます。","feature_link":"https://dpromstk2000-lab.github.io/dpro-eye-salon-line/owner.html","steps":["カテゴリを見る","優先順に確認","対応済み/送信しないの状態を利用者が判断"],"safety":["チュートリアルは操作を自動確定しない"]},{"id":"ART-022","category_id":"CAT-SET","title":"店舗・予約設定を確認する","summary":"店舗情報や予約条件の基本設定です。","feature_link":"https://dpromstk2000-lab.github.io/dpro-eye-salon-line/settings.html","steps":["店舗・予約を開く","現在値を確認","変更時は保存前検証を確認"],"safety":["チュートリアルは操作を自動確定しない"]},{"id":"ART-023","category_id":"CAT-SET","title":"営業時間を設定する","summary":"営業曜日・時間を管理します。","feature_link":"https://dpromstk2000-lab.github.io/dpro-eye-salon-line/settings.html","steps":["営業時間を開く","曜日/時間を確認","保存前に矛盾がないか確認"],"safety":["チュートリアルは操作を自動確定しない"]},{"id":"ART-024","category_id":"CAT-SET","title":"スタッフを設定する","summary":"スタッフ情報と対応可能メニュー等を管理します。","feature_link":"https://dpromstk2000-lab.github.io/dpro-eye-salon-line/settings.html","steps":["スタッフを開く","対象スタッフを確認","必要な項目だけ変更"],"safety":["チュートリアルは操作を自動確定しない"]},{"id":"ART-025","category_id":"CAT-SET","title":"メニュー・料金を設定する","summary":"予約メニュー・料金・所要時間を管理します。","feature_link":"https://dpromstk2000-lab.github.io/dpro-eye-salon-line/settings.html","steps":["メニュー・料金を開く","対象メニューを確認","料金/所要時間等を確認"],"safety":["チュートリアルは操作を自動確定しない"]},{"id":"ART-026","category_id":"CAT-SET","title":"施術席を設定する","summary":"同時施術に関係する施術席を管理します。","feature_link":"https://dpromstk2000-lab.github.io/dpro-eye-salon-line/settings.html","steps":["施術席を開く","登録内容を確認","必要時のみ変更"],"safety":["チュートリアルは操作を自動確定しない"]},{"id":"ART-027","category_id":"CAT-SET","title":"未保存の変更を残さない","summary":"設定画面の未保存警告と検証を利用します。","feature_link":"https://dpromstk2000-lab.github.io/dpro-eye-salon-line/settings.html","steps":["変更後の未保存表示を見る","移動前警告を確認","保存前検証を確認"],"safety":["チュートリアルは操作を自動確定しない"]},{"id":"ART-028","category_id":"CAT-CUSTOMER","title":"お客様のLINE予約5ステップ","summary":"メニューから予約確定までのお客様導線です。","feature_link":"https://dpromstk2000-lab.github.io/dpro-eye-salon-line/index.html","steps":["メニュー","担当者・日時","お客様情報","施術前確認","予約内容確認"],"safety":["チュートリアルは操作を自動確定しない"]},{"id":"ART-029","category_id":"CAT-CUSTOMER","title":"お客様の会員ページ","summary":"次回予約と過去予約をお客様が確認する画面です。","feature_link":"https://dpromstk2000-lab.github.io/dpro-eye-salon-line/member.html","steps":["次回予約","予約変更/キャンセル申請","これまでの予約","同じ内容で予約"],"safety":["チュートリアルは操作を自動確定しない"]},{"id":"ART-030","category_id":"CAT-SAFE","title":"困った時の安全確認","summary":"操作に迷った場合の安全な切り分けです。","feature_link":"https://dpromstk2000-lab.github.io/dpro-eye-salon-line/owner.html","steps":["保存・送信・状態変更の前で止める","画面を再読込して表示を確認する","Guide Centerで該当記事を検索する","改善しない場合はDPROサポートへ連絡する"],"safety":["チュートリアルは操作を自動確定しない"]},{"id":"ART-031","category_id":"CAT-START","title":"スタッフiPadログインを使う","summary":"スタッフは専用コードとPINで認証し、許可された店舗iPad業務だけを操作します。","feature_link":"https://dpromstk2000-lab.github.io/dpro-eye-salon-line/staff-ipad-login.html","steps":["staff-ipad-login.htmlを開く","スタッフコードとPINを入力する","認証後に店舗iPadへ進む","施術進行・カルテ・施術写真など許可された日常業務だけを扱う"],"safety":["PINを教材・印刷物へ記載しない","スタッフ用セッションから店舗設定・スタッフ管理を開かない","チュートリアルは認証を自動実行しない"]},{"id":"ART-032","category_id":"CAT-SET","title":"臨時休業・特別営業を設定する","summary":"通常定休日とは別に、店舗全体の例外営業日を登録・削除する画面です。","feature_link":"https://dpromstk2000-lab.github.io/dpro-eye-salon-line/business-calendar.html","steps":["店舗設定から「臨時休業・特別営業」を開く","対象日を選ぶ","臨時休業または特別営業を選ぶ","特別営業では開店・閉店時刻を30分単位で確認する","理由を確認して利用者が保存する"],"safety":["保存・削除はチュートリアルから自動実行しない","スタッフ専用ログインでは店舗設定を扱わない"]}],"faqs":[{"id":"FAQ-001","question":"管理コードが分からない","answer":"店舗の正式な管理コードを確認してください。チュートリアルや印刷物には認証情報を記載しません。"},{"id":"FAQ-002","question":"今日の予約に見当たらない","answer":"対象日、予約状態、受付経路を確認し、必要なら再読込してください。"},{"id":"FAQ-003","question":"電話予約はどこから入れる","answer":"オーナー管理PCの「電話・店頭予約」から受付経路を選んで登録します。"},{"id":"FAQ-004","question":"Instagramから来た予約はどう記録する","answer":"「電話・店頭予約」の受付経路でInstagramを選びます。"},{"id":"FAQ-005","question":"施術ステータスを間違えそう","answer":"変更前に対象予約と現在状態を確認し、チュートリアルは状態変更を自動実行しません。"},{"id":"FAQ-006","question":"前回カルテを編集してよい","answer":"今回の記録は新しいカルテとして扱い、前回カルテを直接上書きしない運用です。"},{"id":"FAQ-007","question":"施術写真をマニュアルに使える","answer":"実顧客・実在人物の写真は教材・印刷物・公開ガイドに使用しません。"},{"id":"FAQ-008","question":"顧客を電話番号で検索できる","answer":"顧客検索は氏名・電話番号・顧客番号を対象にしています。"},{"id":"FAQ-009","question":"次回予約済みの人にもフォローする","answer":"通常フォローの対象外です。次回予約済みカテゴリを確認してください。"},{"id":"FAQ-010","question":"設定を変えたまま画面を移動してよい","answer":"未保存警告を確認し、意図した内容だけ保存してから移動します。"},{"id":"FAQ-011","question":"お客様は予約変更できる","answer":"member.html で空き時間を選んだ日時変更とキャンセル申請の導線があります。"},{"id":"FAQ-012","question":"日常操作以外の管理画面が見える場合はどうする","answer":"日常チュートリアルの対象外です。操作せず、DPROサポートへ確認してください。"},{"id":"FAQ-013","question":"ガイドをもう一度最初から見たい","answer":"Guide Centerから「最初の10分ガイド」を再実行できる設計にします。"},{"id":"FAQ-014","question":"スタッフが店舗設定を開けない","answer":"仕様どおりです。スタッフ専用ログインは来店受付・施術進行・カルテ・施術写真など日常の許可業務に限定されています。店舗設定やスタッフ管理は管理者側で行います。"},{"id":"FAQ-015","question":"臨時休業や祝日の特別営業はどこで設定する","answer":"店舗設定から「臨時休業・特別営業」を開き、日付と種別を選びます。特別営業では開店・閉店時刻も確認してから保存します。"}],"privacy":{"real_customer_data":false,"real_customer_photos":false,"credentials":false,"fictional_examples_only":true},"mutation_policy":{"auto_create":false,"auto_update":false,"auto_delete":false,"auto_send":false,"auto_save":false,"auto_status_change":false}};
  const ROLE_ADMIN = "SALON_ADMIN_OPERATOR";
  const ROLE_STAFF = "SALON_STAFF_OPERATOR";
  const ROLE_CUSTOMER = "CUSTOMER_LINE_USER";
  const STAFF_ARTICLES = new Set(["ART-009","ART-010","ART-011","ART-012","ART-013","ART-014","ART-030","ART-031"]);
  const CUSTOMER_ARTICLES = new Set(["ART-008","ART-017","ART-018","ART-028","ART-029","ART-030"]);
  const STAFF_FAQS = new Set(["FAQ-002","FAQ-005","FAQ-006","FAQ-007","FAQ-012","FAQ-013","FAQ-014"]);
  const CUSTOMER_FAQS = new Set(["FAQ-011","FAQ-013"]);
  const params = new URLSearchParams(location.search);
  const rawRole = params.get("dpro_role");
  const role = [ROLE_ADMIN,ROLE_STAFF,ROLE_CUSTOMER].includes(rawRole) ? rawRole : ROLE_ADMIN;
  const roleName = role===ROLE_STAFF ? "スタッフ" : role===ROLE_CUSTOMER ? "お客様向け参考" : "オーナー・管理者";
  const $ = s => document.querySelector(s);
  const esc = x => String(x??"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]));
  const articles = CONTENT.articles.filter(a => role===ROLE_ADMIN || (role===ROLE_STAFF ? STAFF_ARTICLES.has(a.id) : CUSTOMER_ARTICLES.has(a.id)));
  const faqs = CONTENT.faqs.filter(f => role===ROLE_ADMIN || (role===ROLE_STAFF ? STAFF_FAQS.has(f.id) : CUSTOMER_FAQS.has(f.id)));
  const allowedCategoryIds = new Set(articles.map(a=>a.category_id));
  const categories = CONTENT.categories.filter(c=>allowedCategoryIds.has(c.id));
  let category = "ALL";
  let query = "";
  function norm(s){ return String(s??"").toLowerCase().normalize("NFKC"); }
  function featureHref(a){
    if(role===ROLE_STAFF && /owner-ipad\.html/.test(a.feature_link||"")) {
      const u=new URL("./staff-ipad-login.html",location.href);
      u.searchParams.set("dpro_role",ROLE_STAFF);
      return u.href;
    }
    return a.feature_link || "#";
  }
  function first10Href(){
    if(role===ROLE_CUSTOMER) return new URL("./member.html",location.href).href;
    const page = role===ROLE_STAFF ? "staff-ipad-login.html" : "owner.html";
    const u=new URL(`./${page}`,location.href);
    u.searchParams.set("dpro_tutorial","1");
    u.searchParams.set("dpro_role",role);
    return u.href;
  }
  function renderRole(){
    $("#roleBadge").textContent=`表示：${roleName}`;
    $("#guideLead").textContent = role===ROLE_STAFF ? "スタッフ専用ログインと、許可された店舗iPad操作を検索して確認できます。" : role===ROLE_CUSTOMER ? "LINE予約・予約確認・日時変更など、お客様側の操作を確認できます。" : "予約・店舗iPad・顧客・再来店・店舗設定を、必要な時に検索して確認できます。";
    const customerReference = role===ROLE_CUSTOMER;
    ["first10Top","first10Replay"].forEach(id=>{ const el=$("#"+id); if(el) el.hidden=customerReference; });
  }
  function renderCategories(){
    const box=$("#categoryList");
    const items=[{id:"ALL",name:"すべて"},...categories];
    box.innerHTML=items.map(c=>`<button class="cat ${category===c.id?'active':''}" type="button" data-cat="${esc(c.id)}">${esc(c.name)}</button>`).join("");
    box.querySelectorAll("[data-cat]").forEach(b=>b.addEventListener("click",()=>{category=b.dataset.cat;renderCategories();renderList();}));
  }
  function matchArticle(a){
    if(category!=="ALL" && a.category_id!==category) return false;
    if(!query) return true;
    return norm([a.title,a.summary,...(a.steps||[]),...(a.safety||[])].join(" ")).includes(query);
  }
  function matchFaq(f){ if(!query) return true; return norm(`${f.question} ${f.answer}`).includes(query); }
  function categoryName(id){ return CONTENT.categories.find(c=>c.id===id)?.name || id; }
  function renderList(){
    const rows=articles.filter(matchArticle);
    $("#resultCount").textContent=`記事 ${rows.length}件 / FAQ ${faqs.filter(matchFaq).length}件`;
    $("#articleList").innerHTML=rows.length?rows.map(a=>`<button class="article-card" type="button" data-article="${esc(a.id)}"><span>${esc(categoryName(a.category_id))}</span><strong>${esc(a.title)}</strong><small>${esc(a.summary)}</small></button>`).join(""):'<div class="empty">該当する記事はありません。</div>';
    $("#articleList").querySelectorAll("[data-article]").forEach(b=>b.addEventListener("click",()=>openArticle(b.dataset.article,true)));
    const fq=faqs.filter(matchFaq);
    $("#faqList").innerHTML=fq.length?fq.map(f=>`<details class="faq"><summary>${esc(f.question)}</summary><p>${esc(f.answer)}</p></details>`).join(""):'<div class="empty">該当するFAQはありません。</div>';
  }
  function openArticle(id,push){
    const a=articles.find(x=>x.id===id);
    if(!a) return closeArticle(false);
    if(push) location.hash=`article=${encodeURIComponent(id)}`;
    $("#detailCategory").textContent=categoryName(a.category_id);
    $("#detailTitle").textContent=a.title;
    $("#detailSummary").textContent=a.summary||"";
    $("#detailSteps").innerHTML=(a.steps||[]).map(s=>`<li>${esc(s)}</li>`).join("");
    const safe=(a.safety||[]); $("#detailSafety").innerHTML=safe.length?`<strong>安全ポイント</strong><ul>${safe.map(s=>`<li>${esc(s)}</li>`).join("")}</ul>`:"";
    const link=$("#featureLink"); link.href=featureHref(a); link.textContent=role===ROLE_STAFF && /owner-ipad\.html/.test(a.feature_link||"") ? "スタッフログインから実画面を開く" : "実画面を開く";
    $("#articleDetail").hidden=false; $("#guideHome").hidden=true; $("#detailTitle").focus();
  }
  function closeArticle(updateHash=true){
    $("#articleDetail").hidden=true; $("#guideHome").hidden=false;
    if(updateHash && location.hash) history.pushState(null,"",location.pathname+location.search);
    $("#search").focus();
  }
  function route(){ const m=location.hash.match(/^#article=([^&]+)/); if(m) openArticle(decodeURIComponent(m[1]),false); else { $("#articleDetail").hidden=true; $("#guideHome").hidden=false; } }
  $("#search").addEventListener("input",e=>{query=norm(e.target.value.trim());renderList();});
  $("#clearSearch").addEventListener("click",()=>{$("#search").value="";query="";renderList();$("#search").focus();});
  $("#backToList").addEventListener("click",()=>closeArticle(true));
  $("#first10Replay").addEventListener("click",e=>{e.preventDefault();try{localStorage.removeItem("dpro_eye_first10_state_v1")}catch{} location.href=first10Href();});
  $("#first10Top").href=first10Href();
  $("#first10Replay").href=first10Href();
  window.addEventListener("hashchange",route);
  renderRole(); renderCategories(); renderList(); route();
})();
