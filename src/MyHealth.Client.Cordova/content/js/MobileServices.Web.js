// ----------------------------------------------------------------------------
// Copyright (c) Microsoft Corporation. All rights reserved
// AzureMobileServices - v2.0.40106.0-beta
// ----------------------------------------------------------------------------

(function (global) {
	var $__fileVersion__ = '2.0.40106.0-beta';
    /// <field name="$__modules__">
    /// Map module names to either their cached exports or a function which
    /// will define the module's exports when invoked.
    /// </field>
    var $__modules__ = { };
    
    function require(name) {
        /// <summary>
        /// Require a module's exports.
        /// </summary>
        /// <param name="name" type="String">
        /// The name of the module.  Note that we don't support full CommonJS
        /// Module specification names here - we only allow the name of the
        /// module's file without any extension.
        /// </param>
        /// <returns type="Object">
        /// The exports provided by the module.
        /// </returns>

        if (name && name.length > 2 && name[0] == '.' && name[1] == '/') {
            name = name.slice(2);
        }

        var existing = $__modules__[name];
        if (typeof existing == 'function') {
            var exports = { };
            $__modules__[name] = exports;
            existing(exports);
            return exports;
        } else if (typeof existing == 'object') {
            return existing;
        } else {
            throw 'Unknown module ' + name;
        }
    }

	$__modules__.Resources = { };

	$__modules__.Resources['de-DE'] = {
		    "Validate_NotNullError"                                 : "{0} darf nicht null sein.",
		    "Validate_NotNullOrEmptyError"                          : "{0} darf nicht null oder leer sein.",
		    "Validate_InvalidId"                                    : "\"{0}\" ist ungültig.",
		    "Validate_TypeCheckError"                               : "Es wird erwartet, dass {0} ein Wert vom Typ {1} und nicht {2} ist.",
		    "Validate_LengthUnexpected"                             : "Es wird erwartet, dass {0} die Länge {1} und nicht {2} aufweist.",
		    "Validate_InvalidUserParameter"                         : "{0} enthält einen ungültigen benutzerdefinierten Abfragezeichenfolge-Parameter: {1}. Benutzerdefinierte Abfragezeichenfolge-Parameter dürfen nicht mit '$' beginnen.",
		    "Extensions_DefaultErrorMessage"                        : "Unerwarteter Fehler.",
		    "Extensions_ConnectionFailureMessage"                   : "Unerwarteter Verbindungsfehler.",
		    "MobileServiceTable_ReadMismatchedQueryTables"          : "Die Ergebnisse einer Abfrage für die Tabelle '{1}' können nicht über die Tabelle '{0}' abgerufen werden.",
		    "MobileServiceTable_InsertIdAlreadySet"                 : "Der Einfügevorgang kann nicht erfolgen, wenn das Element '{0}'bereits festgelegt ist.",
		    "MobileServiceLogin_AuthenticationProviderNotSupported" : "Nicht unterstützter Authentifizierungsanbietername. Bitte geben Sie einen Namen {0} an.",
		    "MobileServiceLogin_LoginErrorResponse"                 : "Es kann kein Anmeldevorgang gestartet werden, weil aktuell bereits eine Anmeldung ausgeführt wird.",
		    "MobileServiceLogin_InvalidResponseFormat"              : "Ungültiges Format der Authentifizierungsantwort.",
		    "MobileServiceLogin_InvalidProvider"                    : "Der erste Parameter muss der Name des Authentifizierungsanbieters oder ein Authentifizierungstoken eines Microsoft-Kontos sein.",
		    "MobileServiceTable_NotSingleObject"                    : "Das Objekt konnte nicht aus der Antwort {0} abgerufen werden.",
		    "Push_ConflictWithReservedName"                         : "Der Vorlagenname verursacht einen Konflikt mit dem reservierten Namen '{0}'.",
		    "Push_InvalidTemplateName"                              : "Der Vorlagenname darf nicht das Zeichen \";\" oder \":\" enthalten.",
		    "Push_NotSupportedXMLFormatAsBodyTemplateWin8"          : "\"bodyTemplate\" weist kein zulässiges XML-Format auf. Der erste Knoten von \"bodyTemplate\" sollte ein Badge, eine Kachel oder ein Popup sein. Dies gilt nicht für eine wns\/raw-Vorlage, die aus gültigem XML bestehen muss.",
		    "Push_BodyTemplateMustBeXml"                            : "Gültiges XML ist für jede Vorlage ohne einen formatierten Header erforderlich.",
		    "Push_TagNoCommas"                                      : "Tags dürfen nicht das Zeichen \",\" enthalten."
		};
	$__modules__.Resources['en-US'] = {
		    "Validate_NotNullError"                                 : "{0} cannot be null.",
		    "Validate_NotNullOrEmptyError"                          : "{0} cannot be null or empty.",
		    "Validate_InvalidId"                                    : "{0} is not valid.",
		    "Validate_TypeCheckError"                               : "{0} is expected to be a value of type {1}, not {2}.",
		    "Validate_LengthUnexpected"                             : "{0} is expected to have length {1}, not {2}.",
		    "Validate_InvalidUserParameter"                         : "{0} contains an invalid user-defined query string parameter: {1}. User-defined query string parameters must not begin with a '$'.",
		    "Extensions_DefaultErrorMessage"                        : "Unexpected failure.",
		    "Extensions_ConnectionFailureMessage"                   : "Unexpected connection failure.",
		    "MobileServiceTable_ReadMismatchedQueryTables"          : "Cannot get the results of a query for table '{1}' via table '{0}'.",
		    "MobileServiceTable_InsertIdAlreadySet"                 : "Cannot insert if the {0} member is already set.",
		    "MobileServiceLogin_AuthenticationProviderNotSupported" : "Unsupported authentication provider name. Please specify one of {0}.",
		    "MobileServiceLogin_LoginErrorResponse"                 : "Cannot start a login operation because login is already in progress.",
		    "MobileServiceLogin_InvalidResponseFormat"              : "Invalid format of the authentication response.",
		    "MobileServiceLogin_InvalidProvider"                    : "The first parameter must be the name of the autentication provider or a Microsoft Account authentication token.",
		    "MobileServiceTable_NotSingleObject"                    : "Could not get object from response {0}.",
		    "Push_ConflictWithReservedName"                         : "Template name conflicts with reserved name '{0}'.",
		    "Push_InvalidTemplateName"                              : "Template name can't contain ';' or ':'.",
		    "Push_NotSupportedXMLFormatAsBodyTemplateWin8"          : "The bodyTemplate is not in accepted XML format. The first node of the bodyTemplate should be Badge\/Tile\/Toast, except for the wns\/raw template, which need to be a valid XML.",
		    "Push_BodyTemplateMustBeXml"                            : "Valid XML is required for any template without a raw header.",
		    "Push_TagNoCommas"                                      : "Tags must not contain ','.",
		    "AlternateLoginHost_Invalid"                            : "{0} is not valid. Expected Absolute Url with https scheme"
		};
	$__modules__.Resources['es-ES'] = {
		    "Validate_NotNullError"                                 : "{0} no puede ser nulo.",
		    "Validate_NotNullOrEmptyError"                          : "{0} no puede ser nulo ni estar vacío.",
		    "Validate_InvalidId"                                    : "{0} no es válido.",
		    "Validate_TypeCheckError"                               : "Se espera que {0} sea un valor del tipo {1}, no {2}.",
		    "Validate_LengthUnexpected"                             : "Se espera que {0} tenga una longitud {1}, no {2}.",
		    "Validate_InvalidUserParameter"                         : "{0} contiene un parámetro de cadena de consulta definido por el usuario: {1}. Los parámetros de cadena de consulta definidos por el usuario no deben comenzar por '$'.",
		    "Extensions_DefaultErrorMessage"                        : "Error inesperado.",
		    "Extensions_ConnectionFailureMessage"                   : "Error de conexión inesperado.",
		    "MobileServiceTable_ReadMismatchedQueryTables"          : "No se pueden obtener los resultados de una consulta para la tabla '{1}' mediante la tabla '{0}'.",
		    "MobileServiceTable_InsertIdAlreadySet"                 : "No se puede insertar si el miembro {0} ya se ha establecido.",
		    "MobileServiceLogin_AuthenticationProviderNotSupported" : "Nombre de proveedor de autenticación no admitido. Especifique uno de {0}.",
		    "MobileServiceLogin_LoginErrorResponse"                 : "No se puede iniciar una operación de inicio de sesión porque el inicio de sesión ya está en curso.",
		    "MobileServiceLogin_InvalidResponseFormat"              : "Formato no válido de la respuesta de autenticación.",
		    "MobileServiceLogin_InvalidProvider"                    : "El primer parámetro debe ser el nombre del proveedor de autenticación o un token de autenticación de la cuenta Microsoft.",
		    "MobileServiceTable_NotSingleObject"                    : "No se puede obtener el objeto de la respuesta {0}.",
		    "Push_ConflictWithReservedName"                         : "El nombre de la plantilla entra en conflicto con el nombre reservado '{0}'.",
		    "Push_InvalidTemplateName"                              : "El nombre de la plantilla no puede contener ';' ni ':'.",
		    "Push_NotSupportedXMLFormatAsBodyTemplateWin8"          : "El objeto bodyTemplate no es un formato XML aceptado. El primer nodo del objeto bodyTemplate debe ser Badge\/Tile\/Toast, excepto para la plantilla wns o sin formato, que debe tener un formato XML válido.",
		    "Push_BodyTemplateMustBeXml"                            : "Se requiere XML válido para todas las plantillas sin encabezado sin formato.",
		    "Push_TagNoCommas"                                      : "Las etiquetas no deben contener ','."
		};
	$__modules__.Resources['fr-FR'] = {
		    "Validate_NotNullError"                                 : "{0} ne peut pas avoir une valeur null.",
		    "Validate_NotNullOrEmptyError"                          : "{0} ne peut pas avoir une valeur null ou être vide.",
		    "Validate_InvalidId"                                    : "{0} n’est pas valide.",
		    "Validate_TypeCheckError"                               : "{0} doit être une valeur de type {1}, et non {2}.",
		    "Validate_LengthUnexpected"                             : "{0} doit avoir une longueur de {1}, et non {2}.",
		    "Validate_InvalidUserParameter"                         : "{0} contient un paramètre de chaîne de requête défini par l’utilisateur non valide : {1}. Les paramètres de chaîne de requête définis par l’utilisateur ne doivent pas commencer par « $ ».",
		    "Extensions_DefaultErrorMessage"                        : "Échec inattendu.",
		    "Extensions_ConnectionFailureMessage"                   : "Échec de connexion inattendu.",
		    "MobileServiceTable_ReadMismatchedQueryTables"          : "Impossible d’obtenir les résultats d’une requête pour la table « {1} » via la table « {0} ».",
		    "MobileServiceTable_InsertIdAlreadySet"                 : "Insertion impossible si le membre {0} est déjà défini.",
		    "MobileServiceLogin_AuthenticationProviderNotSupported" : "Le nom du fournisseur d’authentification n’est pas pris en charge. Veuillez en spécifier un de {0}.",
		    "MobileServiceLogin_LoginErrorResponse"                 : "Impossible de démarrer une opération d’ouverture de session, car une ouverture de session est déjà en cours.",
		    "MobileServiceLogin_InvalidResponseFormat"              : "Le format de la réponse d’authentification n’est pas valide.",
		    "MobileServiceLogin_InvalidProvider"                    : "Le premier paramètre doit correspondre au nom du fournisseur d’autentification ou à un jeton d’authentification de compte Microsoft.",
		    "MobileServiceTable_NotSingleObject"                    : "Impossible d’obtenir un objet de la réponse {0}.",
		    "Push_ConflictWithReservedName"                         : "Le nom de modèle entre en conflit avec le nom réservé '{0}'.",
		    "Push_InvalidTemplateName"                              : "Le nom du modèle ne peut contenir ni ';' ni ':'.",
		    "Push_NotSupportedXMLFormatAsBodyTemplateWin8"          : "Le bodyTemplate n'est pas dans un format XML accepté. Le premier nœud de bodyTemplate doit être Badge\/Tile\/Toast, sauf le modèle wns\/raw, qui doit être un XML valide.",
		    "Push_BodyTemplateMustBeXml"                            : "XML valide est nécessaire pour tout modèle sans un en-tête brut.",
		    "Push_TagNoCommas"                                      : "Les balises ne doivent pas contenir ','."
		}
		;
	$__modules__.Resources['it-IT'] = {
		    "Validate_NotNullError"                                 : "{0} non può essere null.",
		    "Validate_NotNullOrEmptyError"                          : "{0} non può essere null o vuoto.",
		    "Validate_InvalidId"                                    : "{0} non valido.",
		    "Validate_TypeCheckError"                               : "{0} deve essere un valore di tipo {1}, non {2}.",
		    "Validate_LengthUnexpected"                             : "{0} deve avere una lunghezza {1}, non {2}.",
		    "Validate_InvalidUserParameter"                         : "{0} contiene un parametro di stringa di query definito dall'utente non valido: {1}. Questi parametri non devono iniziare con '$'.",
		    "Extensions_DefaultErrorMessage"                        : "Errore imprevisto.",
		    "Extensions_ConnectionFailureMessage"                   : "Errore di connessione imprevisto.",
		    "MobileServiceTable_ReadMismatchedQueryTables"          : "Impossibile ottenere i risultati di una query per la tabella '{1}' tramite la tabella '{0}'.",
		    "MobileServiceTable_InsertIdAlreadySet"                 : "Impossibile eseguire l'inserimento se il membro {0} è già impostato.",
		    "MobileServiceLogin_AuthenticationProviderNotSupported" : "Nome provider di autenticazione non supportato. Specificare un nome di {0}.",
		    "MobileServiceLogin_LoginErrorResponse"                 : "Impossibile avviare l'accesso perché l'operazione è già in corso.",
		    "MobileServiceLogin_InvalidResponseFormat"              : "Formato della risposta di autenticazione non valido.",
		    "MobileServiceLogin_InvalidProvider"                    : "Il primo parametro deve essere il nome di un provider di autenticazione o un token di autenticazione dell'account Microsoft.",
		    "MobileServiceTable_NotSingleObject"                    : "Impossibile ottenere un oggetto dalla risposta {0}.",
		    "Push_ConflictWithReservedName"                         : "Nome modello in conflitto con il nome riservato '{0}'.",
		    "Push_InvalidTemplateName"                              : "Il nome modello non può contenere ';' o ':'.",
		    "Push_NotSupportedXMLFormatAsBodyTemplateWin8"          : "Formato XML di bodyTemplate non accettato. Il primo nodo di bodyTemplate deve essere Badge\/Tile\/Toast, ad eccezione del modello wns\/raw, che devono essere in formato XML valido.",
		    "Push_BodyTemplateMustBeXml"                            : "Per i modelli che non dispongono di un'intestazione non elaborata è necessario un XML valido.",
		    "Push_TagNoCommas"                                      : "I tag non devono contenere ','."
		};
	$__modules__.Resources['ja-JP'] = {
		    "Validate_NotNullError"                                 : "{0} を null にすることはできません。",
		    "Validate_NotNullOrEmptyError"                          : "{0} を null または空にすることはできません。",
		    "Validate_InvalidId"                                    : "{0} は無効です。",
		    "Validate_TypeCheckError"                               : "{0} は、{2} ではなく型 {1} の値であることが想定されています。",
		    "Validate_LengthUnexpected"                             : "{0} は、{2} ではなく長さ {1} であることが想定されています。",
		    "Validate_InvalidUserParameter"                         : "{0} には無効なユーザー定義クエリ文字列パラメーター {1} が含まれています。ユーザー定義クエリ文字列パラメーターの先頭を '$' にすることはできません。",
		    "Extensions_DefaultErrorMessage"                        : "予期しないエラー。",
		    "Extensions_ConnectionFailureMessage"                   : "予期しない接続エラー。",
		    "MobileServiceTable_ReadMismatchedQueryTables"          : "テーブル '{0}' を介してテーブル '{1}' のクエリの結果を取得することはできません。",
		    "MobileServiceTable_InsertIdAlreadySet"                 : "{0} メンバーが既に設定されている場合は、挿入できません。",
		    "MobileServiceLogin_AuthenticationProviderNotSupported" : "サポートされていない認証プロバイダーの名前です。{0} のいずれかを指定してください。",
		    "MobileServiceLogin_LoginErrorResponse"                 : "ログインが既に進行中であるため、ログイン処理を開始できません。",
		    "MobileServiceLogin_InvalidResponseFormat"              : "認証の応答の形式が正しくありません。",
		    "MobileServiceLogin_InvalidProvider"                    : "最初のパラメーターは、認証プロバイダーまたは Microsoft アカウントの認証トークンの名前である必要があります。",
		    "MobileServiceTable_NotSingleObject"                    : "応答 {0} からオブジェクトを取得できません。",
		    "Push_ConflictWithReservedName"                         : "テンプレート名が予約された名前 '{0}' と競合します。",
		    "Push_InvalidTemplateName"                              : "テンプレート名に \";\" または \":\" を含めることはできません。",
		    "Push_NotSupportedXMLFormatAsBodyTemplateWin8"          : "bodyTemplate は許可される XML 形式ではありません。有効な XML である必要がある wns\/raw テンプレートを除き、bodyTemplate の最初のノードは Badge\/Tile\/Toast である必要があります。",
		    "Push_BodyTemplateMustBeXml"                            : "生のヘッダーのないテンプレートには、有効な XML が必要です。",
		    "Push_TagNoCommas"                                      : "タグに ',' を含めることはできません。"
		};
	$__modules__.Resources['ko-KR'] = {
		    "Validate_NotNullError"                                 : "{0}은(는) null일 수 없습니다.",
		    "Validate_NotNullOrEmptyError"                          : "{0}은(는) null이거나 비어 있을 수 없습니다.",
		    "Validate_InvalidId"                                    : "{0}이(가) 잘못되었습니다.",
		    "Validate_TypeCheckError"                               : "{0}은(는) {2}이(가) 아닌 유형 {1}의 값이어야 합니다.",
		    "Validate_LengthUnexpected"                             : "{0}에는 {2}이(가) 아닌 길이 {1}이(가) 필요합니다.",
		    "Validate_InvalidUserParameter"                         : "{0}에 잘못된 사용자 정의 쿼리 문자열 매개 변수 {1}이(가) 포함됩니다. 사용자 정의 쿼리 문자열 매개 변수는 '$'로 시작할 수 없습니다.",
		    "Extensions_DefaultErrorMessage"                        : "예상치 못한 오류입니다.",
		    "Extensions_ConnectionFailureMessage"                   : "예상치 못한 연결 오류입니다.",
		    "MobileServiceTable_ReadMismatchedQueryTables"          : "테이블 '{0}'을(를) 통해 테이블 '{1}'의 쿼리 결과를 가져올 수 없습니다.",
		    "MobileServiceTable_InsertIdAlreadySet"                 : "구성원 {0}이(가) 이미 설정된 경우에는 삽입할 수 없습니다.",
		    "MobileServiceLogin_AuthenticationProviderNotSupported" : "지원되지 않는 인증 공급자 이름입니다. {0} 중 하나를 지정하십시오.",
		    "MobileServiceLogin_LoginErrorResponse"                 : "로그인이 이미 진행 중이므로 로그인 작업을 시작할 수 없습니다.",
		    "MobileServiceLogin_InvalidResponseFormat"              : "잘못된 형식의 인증 응답입니다.",
		    "MobileServiceLogin_InvalidProvider"                    : "첫 번째 매개 변수는 인증 공급자의 이름이거나 Microsoft 계정 인증 토큰이어야 합니다.",
		    "MobileServiceTable_NotSingleObject"                    : "응답 {0}에서 개체를 가져올 수 없습니다.",
		    "Push_ConflictWithReservedName"                         : "템플릿 이름이 예약된 이름 '{0}'과(와) 충돌합니다.",
		    "Push_InvalidTemplateName"                              : "템플릿 이름에 ';' 또는 ':'을 포함할 수 없습니다.",
		    "Push_NotSupportedXMLFormatAsBodyTemplateWin8"          : "bodyTemplate이 허용되는 XML 형식이 아닙니다. wns\/원시 템플릿을 제외한 bodyTemplate의 첫 번째 노드는 Badge\/Tile\/Toast여야 하며, 이는 올바른 XML이어야 합니다.",
		    "Push_BodyTemplateMustBeXml"                            : "원시 헤더가 없는 템플릿에 올바른 XML이 필요합니다.",
		    "Push_TagNoCommas"                                      : "태그에 ','를 포함하지 않아야 합니다."
		};
	$__modules__.Resources['ru-RU'] = {
		    "Validate_NotNullError"                                 : "{0} не может иметь значение NULL.",
		    "Validate_NotNullOrEmptyError"                          : "{0} не может иметь значение NULL или пустое значение.",
		    "Validate_InvalidId"                                    : "{0} не является действительным.",
		    "Validate_TypeCheckError"                               : "Ожидается значение {0} типа {1}, а не {2}.",
		    "Validate_LengthUnexpected"                             : "Ожидается длина {0}, равная {1}, а не {2}.",
		    "Validate_InvalidUserParameter"                         : "{0} содержит недопустимый параметр пользовательской строки запроса: {1}. Параметры пользовательской строки запроса не должны начинаться с '$'.",
		    "Extensions_DefaultErrorMessage"                        : "Непредвиденный сбой.",
		    "Extensions_ConnectionFailureMessage"                   : "Непредвиденный сбой подключения.",
		    "MobileServiceTable_ReadMismatchedQueryTables"          : "Не удается получить результаты запроса таблицы \"{1}\" посредством таблицы \"{0}\".",
		    "MobileServiceTable_InsertIdAlreadySet"                 : "Вставка невозможна, если элемент {0} уже задан.",
		    "MobileServiceLogin_AuthenticationProviderNotSupported" : "Неподдерживаемое имя поставщика проверки подлинности. Укажите одно из следующих: {0}.",
		    "MobileServiceLogin_LoginErrorResponse"                 : "Не удается начать операцию входа, так как он уже выполняется.",
		    "MobileServiceLogin_InvalidResponseFormat"              : "Недопустимый формат ответа проверки подлинности.",
		    "MobileServiceLogin_InvalidProvider"                    : "Первым параметром должно быть имя поставщика проверки подлинности или маркер проверки подлинности учетной записи Майкрософт.",
		    "MobileServiceTable_NotSingleObject"                    : "Не удалось получить объект из ответа: {0}.",
		    "Push_ConflictWithReservedName"                         : "Имя шаблона конфликтует с зарезервированным именем \"{0}\".",
		    "Push_InvalidTemplateName"                              : "Имя шаблона не может содержать символы \";\" или \":\".",
		    "Push_NotSupportedXMLFormatAsBodyTemplateWin8"          : "Шаблон текста в формате XML не принимается. Первым узлом bodyTemplate должен быть Badge\/Tile\/Toast, за исключением шаблона wns\/raw, который должен быть представлен в действительном формате XML.",
		    "Push_BodyTemplateMustBeXml"                            : "В заголовке raw любого шаблона должен быть указан допустимый XML.",
		    "Push_TagNoCommas"                                      : "Теги не должны содержать символ \",\"."
		};
	$__modules__.Resources['zh-CN'] = {
		    "Validate_NotNullError"                                 : "{0} 不能为 Null。",
		    "Validate_NotNullOrEmptyError"                          : "{0} 不能为 Null 或为空。",
		    "Validate_InvalidId"                                    : "{0} 无效。",
		    "Validate_TypeCheckError"                               : "{0} 应为 {1} 类型的值，而不是 {2} 类型的值。",
		    "Validate_LengthUnexpected"                             : "{0} 的长度应为 {1}，而不是 {2}。",
		    "Validate_InvalidUserParameter"                         : "{0} 包含无效的用户定义的查询字符串参数: {1}。用户定义的查询字符串参数不能以 \"$\" 开头。",
		    "Extensions_DefaultErrorMessage"                        : "意外失败。",
		    "Extensions_ConnectionFailureMessage"                   : "意外的连接失败。",
		    "MobileServiceTable_ReadMismatchedQueryTables"          : "无法通过表“{0}”获取表“{1}”的查询结果。",
		    "MobileServiceTable_InsertIdAlreadySet"                 : "如果已设置 {0} 成员，则无法插入。",
		    "MobileServiceLogin_AuthenticationProviderNotSupported" : "身份验证提供程序名称不受支持。请从 {0} 中指定一个。",
		    "MobileServiceLogin_LoginErrorResponse"                 : "无法启动登录操作，因为登录已在进行中。",
		    "MobileServiceLogin_InvalidResponseFormat"              : "身份验证响应的格式无效。",
		    "MobileServiceLogin_InvalidProvider"                    : "第一个参数必须是身份验证提供程序的名称或 Microsoft 帐户身份验证令牌。",
		    "MobileServiceTable_NotSingleObject"                    : "无法从响应 {0} 获取对象。",
		    "Push_ConflictWithReservedName"                         : "模板名称与保留名称“{0}”冲突。",
		    "Push_InvalidTemplateName"                              : "模板名称不能包含“;”或“:”。",
		    "Push_NotSupportedXMLFormatAsBodyTemplateWin8"          : "bodyTemplate 不是接受的 XML 格式。bodyTemplate 的第一个节点应为 Badge\/Tile\/Toast，但 wns\/raw 模板除外，此模板应为有效的 XML。",
		    "Push_BodyTemplateMustBeXml"                            : "不含 raw 标头的任何模板都必须为有效的 XML 格式。",
		    "Push_TagNoCommas"                                      : "标记不得包含“,”。"
		};
	$__modules__.Resources['zh-TW'] = {
		    "Validate_NotNullError"                                 : "{0} 不能為 Null。",
		    "Validate_NotNullOrEmptyError"                          : "{0} 不能為 Null 或空。",
		    "Validate_InvalidId"                                    : "{0} 無效。",
		    "Validate_TypeCheckError"                               : "{0} 預期為類型 {1} 的值，而非 {2}。",
		    "Validate_LengthUnexpected"                             : "{0} 預期長度為 {1}，而非 {2}。",
		    "Validate_InvalidUserParameter"                         : "{0} 包含無效的使用者定義查詢字串參數: {1}。使用者定義查詢字串參數不能以 '$' 開頭。",
		    "Extensions_DefaultErrorMessage"                        : "未預期的失敗。",
		    "Extensions_ConnectionFailureMessage"                   : "未預期的連線失敗。",
		    "MobileServiceTable_ReadMismatchedQueryTables"          : "無法透過表格 '{0}' 取得表格 '{1}' 的查詢結果。",
		    "MobileServiceTable_InsertIdAlreadySet"                 : "如果已設定 {0} 成員，則無法插入。",
		    "MobileServiceLogin_AuthenticationProviderNotSupported" : "不支援的驗證提供者名稱。請指定其中一個 {0}。",
		    "MobileServiceLogin_LoginErrorResponse"                 : "無法開始登入作業，因為登入作業已在進行中。",
		    "MobileServiceLogin_InvalidResponseFormat"              : "無效的驗證回應格式。",
		    "MobileServiceLogin_InvalidProvider"                    : "第一個參數必須為驗證提供者名稱或 Microsoft 帳戶驗證 Token。",
		    "MobileServiceTable_NotSingleObject"                    : "無法從回應 {0} 中取得物件。",
		    "Push_ConflictWithReservedName"                         : "範本名稱與保留的名稱 '{0}' 衝突。",
		    "Push_InvalidTemplateName"                              : "範本名稱不能包含 ';' 或 ':'。",
		    "Push_NotSupportedXMLFormatAsBodyTemplateWin8"          : "bodyTemplate 的 XML 格式不受支援。bodyTemplate 的第一個節點應該是 Badge\/Tile\/Toast，wns\/raw 除外，其應該有有有效的 XML。",
		    "Push_BodyTemplateMustBeXml"                            : "任何沒有原始標頭的範本都需要有效的 XML。",
		    "Push_TagNoCommas"                                      : "標籤不能包含 ','。"
		};

	$__modules__.Extensions = function (exports) {
		// ----------------------------------------------------------------------------
		// Copyright (c) Microsoft Corporation. All rights reserved.
		// ----------------------------------------------------------------------------
		
		/// <reference path="C:\Program Files (x86)\Microsoft SDKs\Windows\v8.0\ExtensionSDKs\Microsoft.WinJS.1.0\1.0\DesignTime\CommonConfiguration\Neutral\Microsoft.WinJS.1.0\js\base.js" />
		/// <reference path="C:\Program Files (x86)\Microsoft SDKs\Windows\v8.0\ExtensionSDKs\Microsoft.WinJS.1.0\1.0\DesignTime\CommonConfiguration\Neutral\Microsoft.WinJS.1.0\js\ui.js" />
		/// <reference path="..\Generated\MobileServices.DevIntellisense.js" />
		
		// Declare JSHint globals
		/*global XMLHttpRequest:false */
		
		var Validate = require('Validate');
		var Platform = require('Platform');
		var _ = exports;
		
		exports.isNull = function (value) {
		    /// <summary>
		    /// Gets a value indicating whether the provided value is null (or
		    /// undefined).
		    /// </summary>
		    /// <param name="value" type="Object" mayBeNull="true">
		    /// The value to check.
		    /// </param>
		    /// <returns type="Boolean">
		    /// A value indicating whether the provided value is null (or undefined).
		    /// </returns>
		    
		    return value === null || value === undefined;
		};
		
		exports.isNullOrZero = function (value) {
		    /// <summary>
		    /// Gets a value indicating whether the provided value is null (or
		    /// undefined) or zero / empty string
		    /// </summary>
		    /// <param name="value" type="Object" mayBeNull="true">
		    /// The value to check.
		    /// </param>
		    /// <returns type="Boolean">
		    /// A value indicating whether the provided value is null (or undefined) or zero or empty string.
		    /// </returns>
		
		    return value === null || value === undefined || value === 0 || value === '';
		};
		
		exports.isNullOrEmpty = function (value) {
		    /// <summary>
		    /// Gets a value indicating whether the provided value is null (or
		    /// undefined) or empty.
		    /// </summary>
		    /// <param name="value" type="Object" mayBeNull="true">
		    /// The value to check.
		    /// </param>
		    /// <returns type="Boolean">
		    /// A value inHdicating whether the provided value is null (or undefined).
		    /// </returns>
		
		    return _.isNull(value) || value.length === 0;
		};
		
		exports.format = function (message) {
		    /// <summary>
		    /// Format a string by replacing all of its numbered arguments with
		    /// parameters to the method. Arguments are of the form {0}, {1}, ..., like
		    /// in .NET.
		    /// </summary>
		    /// <param name="message" type="string" mayBeNull="false">
		    /// The format string for the message.
		    /// </param>
		    /// <param name="arguments" type="array" optional="true">
		    /// A variable number of arguments that can be used to format the message.
		    /// </param>
		    /// <returns type="string">The formatted string.</returns>
		
		    Validate.isString(message, 'message');
		
		    // Note: There are several flaws in this implementation that we are
		    // ignoring for simplicity as it's only used internally.  Examples that
		    // could be handled better include:
		    //    format('{0} {1}', 'arg') => 'arg {1}'
		    //    format('{0} {1}', '{1}', 'abc') => 'abc abc'
		    //    format('{0}', '{0}') => <stops responding>
		
		    if (!_.isNullOrEmpty(message) && arguments.length > 1) {
		        for (var i = 1; i < arguments.length; i++) {
		            var pattern = '{' + (i - 1) + '}';
		            while (message.indexOf(pattern) !== -1) {
		                message = message.replace(pattern, arguments[i]);
		            }
		        }
		    }
		
		    return message;
		};
		
		exports.has = function (value, key) {
		    /// <summary>
		    /// Determine if an object defines a given property.
		    /// </summary>
		    /// <param name="value" type="Object">The object to check.</param>
		    /// <param name="key" type="String">
		    /// The name of the property to check for.
		    /// </param>
		    /// <returns type="Boolean">
		    /// A value indicating whether the object defines the property.
		    /// </returns>
		
		    Validate.notNull(key, 'key');
		    Validate.isString(key, 'key');
		
		    return !_.isNull(value) && value.hasOwnProperty(key);
		};
		
		exports.hasProperty = function (object, properties) {
		    /// <summary>
		    /// Determines if an object has any of the passed in properties
		    /// </summary>
		    /// <returns type="boolean">True if it contains any one of the properties
		    /// </returns>
		    for (var i = 0; i < properties.length; i++) {
		        if (_.has(object, properties[i])) {
		            return true;
		        }
		    }
		    return false;
		};
		
		exports.extend = function extend(target, members) {
		    /// <summary>
		    /// Extends the target with the members of the members object.
		    /// </summary>
		    /// <param name="target" type="Object">The target object to extend.</param>
		    /// <param name="members" type="Object">The members object to add to the target.</param>
		    /// <returns type="Object">The target object extended with the members.
		    /// </returns>
		    for (var member in members) {
		        if (members.hasOwnProperty(member)) {
		            target[member] = members[member];
		        }
		    }
		    return target;
		};
		
		exports.isObject = function (value) {
		    /// <summary>
		    /// Determine if a value is an object.
		    /// </summary>
		    /// <param name="value" type="Object">The value to check.</param>
		    /// <returns type="boolean">
		    /// True if the value is an object (or null), false othwerise.
		    /// </returns>
		
		    return _.isNull(value) || (typeof value === 'object' && !_.isDate(value));
		};
		
		exports.isValidId = function (value) {
		    /// <summary>
		    /// Determine if a value is an acceptable id for use by the mobile service
		    /// </summary>
		    /// <param name="value" type="Object">The value to check.</param>
		    /// <returns type="boolean">
		    /// True if the value is a string or number, meeting all criteria, or false othwerise.
		    /// </returns>
		    if (_.isNullOrZero(value)) {
		        return false;
		    }
		
		    if (_.isString(value)) {
		        // Strings must contain at least one non whitespace character
		        if (value.length === 0 || value.length > 255 || value.trim().length === 0) {
		            return false;
		        }
		
		        var ex = /[+"\/?`\\]|[\u0000-\u001F]|[\u007F-\u009F]|^\.{1,2}$/;
		        if (value.match(ex) !== null) {
		            return false;
		        }
		
		        return true;
		
		    } else if (_.isNumber(value)) {
		        return value > 0;
		    }
		
		    return false;
		};
		
		exports.isString = function (value) {
		    /// <summary>
		    /// Determine if a value is a string.
		    /// </summary>
		    /// <param name="value" type="Object">The value to check.</param>
		    /// <returns type="boolean">
		    /// True if the value is a string (or null), false othwerise.
		    /// </returns>
		
		    return _.isNull(value) || (typeof value === 'string');
		};
		
		exports.isNumber = function (value) {
		    /// <summary>
		    /// Determine if a value is a number.
		    /// </summary>
		    /// <param name="value" type="Object">The value to check.</param>
		    /// <returns type="boolean">
		    /// True if the value is a number, false othwerise.
		    /// </returns>
		
		    return !_.isNull(value) && (typeof value === 'number');
		};
		
		exports.isBool = function (value) {
		    /// <summary>
		    /// Determine if a value is a boolean.
		    /// </summary>
		    /// <param name="value" type="Object">The value to check.</param>
		    /// <returns type="boolean">
		    /// True if the value is a boolean, false othwerise.
		    /// </returns>
		    return !_.isNull(value) && (typeof value == 'boolean');
		};
		
		function classOf(value) {
		    return Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
		}
		
		exports.isDate = function (value) {
		    /// <summary>
		    /// Determine if a value is a date.
		    /// </summary>
		    /// <param name="value" type="Object">The value to check.</param>
		    /// <returns type="boolean">
		    /// True if the value is a date, false othwerise.
		    /// </returns>
		    return !_.isNull(value) && (classOf(value) == 'date');
		};
		
		exports.toJson = function (value) {
		    /// <summary>
		    /// Convert an object into JSON format.
		    /// </summary>
		    /// <param name="value" type="Object">The value to convert.</param>
		    /// <returns type="String">The value as JSON.</returns>
		
		    return Platform.toJson(value);
		};
		
		exports.fromJson = function (value) {
		    /// <summary>
		    /// Convert an object from JSON format.
		    /// </summary>
		    /// <param name="value" type="String">The value to convert.</param>
		    /// <returns type="Object">The value as an object.</returns>
		
		    var jsonValue = null;
		    if (!_.isNullOrEmpty(value)) {
		        // We're wrapping this so we can hook the process and perform custom JSON
		        // conversions
		        jsonValue = JSON.parse(
		            value,
		            function (k, v) {
		                // Try to convert the value as a Date
		                if (_.isString(v) && !_.isNullOrEmpty(v)) {
		                    var date = exports.tryParseIsoDateString(v);
		                    if (!_.isNull(date)) {
		                        return date;
		                    }
		                }
		
		                // TODO: Convert geolocations once they're supported
		                // TODO: Expose the ability for developers to convert custom types
		
		                // Return the original value if we couldn't do anything with it
		                return v;
		            });
		    }
		
		    return jsonValue;
		};
		
		exports.createUniqueInstallationId = function () {
		    /// <summary>
		    /// Create a unique identifier that can be used for the installation of
		    /// the current application.
		    /// </summary>
		    /// <returns type="String">Unique identifier.</returns>
		
		    var pad4 = function (str) { return "0000".substring(str.length) + str; };
		    var hex4 = function () { return pad4(Math.floor(Math.random() * 0x10000 /* 65536 */).toString(16)); };
		
		    return (hex4() + hex4() + "-" + hex4() + "-" + hex4() + "-" + hex4() + "-" + hex4() + hex4() + hex4());
		};
		
		exports.mapProperties = function (instance, action) {
		    /// <summary>
		    /// Map a function over the key/value pairs in an instance.
		    /// </summary>
		    /// <param name="instance" type="Object">
		    /// The instance to map over.
		    /// </param>
		    /// <param name="action" type="function (key, value)">
		    /// The action to map over the key/value pairs.
		    /// </param>
		    /// <returns elementType="object">Mapped results.</returns>
		
		    var results = [];
		    if (!_.isNull(instance)) {
		        var key = null;
		        for (key in instance) {
		            results.push(action(key, instance[key]));
		        }
		    }
		    return results;
		};
		
		exports.pad = function (value, length, ch) {
		    /// <summary>
		    /// Pad the a value with a given character until it reaches the desired
		    /// length.
		    /// </summary>
		    /// <param name="value" type="Object">The value to pad.</param>
		    /// <param name="length" type="Number">The desired length.</param>
		    /// <param name="ch" type="String">The character to pad with.</param>
		    /// <returns type="String">The padded string.</returns>
		
		    Validate.notNull(value, 'value');
		    Validate.isInteger(length, 'length');
		    Validate.isString(ch, 'ch');
		    Validate.notNullOrEmpty(ch, 'ch');
		    Validate.length(ch, 1, 'ch');
		
		    var text = value.toString();
		    while (text.length < length) {
		        text = ch + text;
		    }
		    return text;
		};
		
		exports.trimEnd = function (text, ch) {
		    /// <summary>
		    /// Trim all instance of a given characher from the end of a string.
		    /// </summary>
		    /// <param name="text" type="String" mayBeNull="false">
		    /// The string to trim.
		    /// <param name="ch" type="String" mayBeNull="false">
		    /// The character to trim.
		    /// </param>
		    /// <returns type="String">The trimmed string.</returns>
		
		    Validate.isString(text, 'text');
		    Validate.notNull(text, 'text');
		    Validate.isString(ch, 'ch');
		    Validate.notNullOrEmpty('ch', 'ch');
		    Validate.length(ch, 1, 'ch');
		
		    var end = text.length - 1;
		    while (end >= 0 && text[end] === ch) {
		        end--;
		    }
		
		    return end >= 0 ?
		        text.substr(0, end + 1) :
		        '';
		};
		
		exports.trimStart = function (text, ch) {
		    /// <summary>
		    /// Trim all instance of a given characher from the start of a string.
		    /// </summary>
		    /// <param name="text" type="String" mayBeNull="false">
		    /// The string to trim.
		    /// </param>
		    /// <param name="ch" type="String" mayBeNull="false">
		    /// The character to trim.
		    /// </param>
		    /// <returns type="String">The trimmed string.</returns>
		
		    Validate.isString(text, 'text');
		    Validate.notNull(text, 'text');
		    Validate.isString(ch, 'ch');
		    Validate.notNullOrEmpty(ch, 'ch');
		    Validate.length(ch, 1, 'ch');
		
		    var start = 0;
		    while (start < text.length && text[start] === ch) {
		        start++;
		    }
		
		    return start < text.length ?
		        text.substr(start, text.length - start) :
		        '';
		};
		
		exports.compareCaseInsensitive = function (first, second) {
		    /// <summary>
		    /// Compare two strings for equality while igorning case.
		    /// </summary>
		    /// <param name="first" type="String">First value.</param>
		    /// <param name="second" type="String">Second value.</param>
		    /// <returns type="Boolean">Whether the strings are the same.</returns>
		
		    // NOTE: We prefer uppercase on Windows for historical reasons where it was
		    // possible to have alphabets where several uppercase characters mapped to
		    // the same lowercase character.
		
		    if (_.isString(first) && !_.isNullOrEmpty(first)) {
		        first = first.toUpperCase();
		    }
		
		    if (_.isString(first) && !_.isNullOrEmpty(second)) {
		        second = second.toUpperCase();
		    }
		
		    return first === second;
		};
		
		/// <field name="url" type="Object">
		/// Path specific utilities for working with URIs.
		/// </field>
		exports.url = {
		    /// <field name="separator" type="String">
		    /// The path separator character used for combining path segments.
		    /// </field>
		    separator: '/',
		
		    combinePathSegments: function () {
		        /// <summary>
		        /// Combine several segments into a path.
		        /// </summary>
		        /// <param parameterArray="true" elementType="String">
		        /// The segments of the path that should be combined.
		        /// </param>
		        /// <returns type="String">The combined path.</returns>
		
		        // Normalize the segements
		        var segments = [];
		        var i = 0;
		        Validate.notNullOrEmpty(arguments, 'arguments');
		        for (i = 0; i < arguments.length; i++) {
		            var segment = arguments[i];
		            Validate.isString(segment, _.format('argument[{0}]', i));
		
		            if (i !== 0) {
		                segment = _.trimStart(segment || '', _.url.separator);
		            }
		            if (i < arguments.length - 1) {
		                segment = _.trimEnd(segment || '', _.url.separator);
		            }
		
		            segments.push(segment);
		        }
		
		        // Combine the segments
		        return segments.reduce(
		            function (a, b) { return a + _.url.separator + b; });
		    },
		
		    getQueryString: function (parameters) {
		        /// <summary>
		        /// Converts an Object instance into a query string
		        /// </summary>
		        /// <param name="parameters" type="Object">The parameters from which to create a query string.</param>
		        /// <returns type="String">A query string</returns>
		        
		        Validate.notNull(parameters, 'parameters');
		        Validate.isObject(parameters, 'parameters');
		
		        var pairs = [];
		        for (var parameter in parameters) {
		            var value = parameters[parameter];
		            if (exports.isObject(value)) {
		                value = exports.toJson(value);
		            }
		            pairs.push(encodeURIComponent(parameter) + "=" + encodeURIComponent(value));
		        }
		
		        return pairs.join("&");
		    },
		
		    combinePathAndQuery: function (path, queryString) {
		        /// <summary>
		        /// Concatenates the URI query string to the URI path.
		        /// </summary>
		        /// <param name="path" type="String>The URI path</param>
		        /// <param name="queryString" type="String>The query string.</param>
		        /// <returns type="String>The concatenated URI path and query string.</returns>
		        Validate.notNullOrEmpty(path, 'path');
		        Validate.isString(path, 'path');
		        if (_.isNullOrEmpty(queryString)) {
		            return path;
		        }
		        Validate.isString(queryString, 'queryString');
		
		        if (path.indexOf('?') >= 0) {
		            return path + '&' + exports.trimStart(queryString, '?');
		        } else {
		            return path + '?' + exports.trimStart(queryString, '?');
		        }
		    },
		
		    isAbsoluteUrl: function (url) {
		        /// <summary>
		        /// Currently just a simple check if the url begins with http:// or https:/
		        /// </summary>
		        if (_.isNullOrEmpty(url)) {
		            return false;
		        }
		
		        var start = url.substring(0, 7).toLowerCase();
		        return (start  == "http://" || start == "https:/");
		    },
		
		    isHttps: function (url) {
		        /// <summary>
		        /// Simple check to verify if url begins with https:/
		        /// </summary>
		        if (_.isNullOrEmpty(url)) {
		            return false;
		        }
		
		        var start = url.substring(0, 7).toLowerCase();
		        return (start == "https:/");
		    }
		
		};
		
		exports.tryParseIsoDateString = function (text) {
		    /// <summary>
		    /// Try to parse an ISO date string.
		    /// </summary>
		    /// <param name="text" type="String">The text to parse.</param>
		    /// <returns type="Date">The parsed Date or null.</returns>
		
		    return Platform.tryParseIsoDateString(text);
		};
		
		exports.createError = function (exceptionOrMessage, request) {
		    /// <summary>
		    /// Wrap an error thrown as an exception.
		    /// </summary>
		    /// <param name="exceptionOrMessage">
		    /// The exception or message to throw.
		    /// </param>
		    /// <param name="request">
		    /// The failing request.
		    /// </param>
		    /// <returns>An object with error details</returns>
		
		    // Create an error object to return
		    var error = { message: Platform.getResourceString("Extensions_DefaultErrorMessage") };
		    error.toString = function () {
		        return error.message;
		    };
		
		    if (request) {
		        error.request = request;
		        if (request.status === 0) {
		            // Provide a more helpful message for connection failures
		            error.message = Platform.getResourceString("Extensions_ConnectionFailureMessage");
		        } else {
		            // Try to pull out an error message from the response before
		            // defaulting to the status
		            var isText = false;
		            if (request.getResponseHeader) {
		                var contentType = request.getResponseHeader('Content-Type');
		                if (contentType) {
		                    isText = contentType.toLowerCase().indexOf("text") >= 0;
		                }
		            }
		
		            try {
		                var response = JSON.parse(request.responseText);
		                if (typeof response === 'string') {
		                    error.message = response;
		                } else {
		                    error.message =
		                        response.error ||
		                        response.description ||
		                        request.statusText ||
		                        Platform.getResourceString("Extensions_DefaultErrorMessage");
		                }
		            } catch (ex) {
		                if (isText) {
		                    error.message = request.responseText;
		                } else {
		                    error.message =
		                        request.statusText ||
		                        Platform.getResourceString("Extensions_DefaultErrorMessage");
		                }
		            }
		        }
		    } else if (_.isString(exceptionOrMessage) && !_.isNullOrEmpty(exceptionOrMessage)) {
		        // If it's a string, just use that as the message
		        error.message = exceptionOrMessage;
		    } else if (!_.isNull(exceptionOrMessage)) {
		        // Otherwise we'll use the object as an exception and leave the
		        // default error message
		        error.exception = exceptionOrMessage;
		    }
		
		    return error;
		};
	};

	$__modules__.MobileServiceClient = function (exports) {
		// ----------------------------------------------------------------------------
		// Copyright (c) Microsoft Corporation. All rights reserved.
		// ----------------------------------------------------------------------------
		
		/// <reference path="C:\Program Files (x86)\Microsoft SDKs\Windows\v8.0\ExtensionSDKs\Microsoft.WinJS.1.0\1.0\DesignTime\CommonConfiguration\Neutral\Microsoft.WinJS.1.0\js\base.js" />
		/// <reference path="C:\Program Files (x86)\Microsoft SDKs\Windows\v8.0\ExtensionSDKs\Microsoft.WinJS.1.0\1.0\DesignTime\CommonConfiguration\Neutral\Microsoft.WinJS.1.0\js\ui.js" />
		/// <reference path="Generated\MobileServices.DevIntellisense.js" />
		
		var _ = require('Extensions');
		var Validate = require('Validate');
		var Platform = require('Platform');
		var MobileServiceTable = require('MobileServiceTable').MobileServiceTable;
		var MobileServiceLogin = require('MobileServiceLogin').MobileServiceLogin;
		
		var Push;
		try {
		    Push = require('Push').Push;
		} catch (e) { }
		
		var _zumoFeatures = {
		    JsonApiCall: "AJ",               // Custom API call, where the request body is serialized as JSON
		    GenericApiCall: "AG",            // Custom API call, where the request body is sent 'as-is'
		    AdditionalQueryParameters: "QS", // Table or API call, where the caller passes additional query string parameters
		    OptimisticConcurrency: "OC",     // Table update / delete call, using Optimistic Concurrency (If-Match headers)
		    TableRefreshCall: "RF",          // Refresh table call
		    TableReadRaw: "TR",              // Table reads where the caller uses a raw query string to determine the items to be returned
		    TableReadQuery: "TQ",            // Table reads where the caller uses a function / query OM to determine the items to be returned
		};
		var _zumoFeaturesHeaderName = "X-ZUMO-FEATURES";
		var _zumoApiVersionHeaderName = "ZUMO-API-VERSION";
		var _zumoApiVersion = "2.0.0";
		var _alternateLoginHost = null;
		Object.defineProperties(MobileServiceClient.prototype, {
		    alternateLoginHost: {
		        get: function () {
		            return this._alternateLoginHost;
		        },
		        set: function (value) {
		            if (_.isNullOrEmpty(value)) {
		                this._alternateLoginHost = this.applicationUrl;
		            }else if (_.url.isAbsoluteUrl(value) && _.url.isHttps(value)) {
		                this._alternateLoginHost = value;
		            } else {
		                throw _.format(Platform.getResourceString("AlternateLoginHost_Invalid"), value);
		            }
		        }
		    }
		});
		var _loginUriPrefix = null;
		Object.defineProperties(MobileServiceClient.prototype, {
		    loginUriPrefix: {
		        get: function () {
		            return this._loginUriPrefix;
		        },
		        set: function (value) {
		            if (_.isNullOrEmpty(value)) {
		                this._loginUriPrefix = ".auth/login";
		            } else {
		                _.isString(value);
		                this._loginUriPrefix = value;
		            }
		        }
		    }
		});
		
		function MobileServiceClient(applicationUrl) {
		    /// <summary>
		    /// Initializes a new instance of the MobileServiceClient class.
		    /// </summary>
		    /// <param name="applicationUrl" type="string" mayBeNull="false">
		    /// The URL to the Mobile Services application.
		    /// </param>
		
		    Validate.isString(applicationUrl, 'applicationUrl');
		    Validate.notNullOrEmpty(applicationUrl, 'applicationUrl');
		
		    this.applicationUrl = applicationUrl;
		
		    var sdkInfo = Platform.getSdkInfo();
		    var osInfo = Platform.getOperatingSystemInfo();
		    var sdkVersion = sdkInfo.fileVersion.split(".").slice(0, 2).join(".");
		    this.version = "ZUMO/" + sdkVersion + " (lang=" + sdkInfo.language + "; " +
		                                            "os=" + osInfo.name + "; " +
		                                            "os_version=" + osInfo.version + "; " +
		                                            "arch=" + osInfo.architecture + "; " +
		                                            "version=" + sdkInfo.fileVersion + ")";
		    this.currentUser = null;
		    this._serviceFilter = null;
		    this._login = new MobileServiceLogin(this);
		
		    this.getTable = function (tableName) {
		        /// <summary>
		        /// Gets a reference to a table and its data operations.
		        /// </summary>
		        /// <param name="tableName">The name of the table.</param>
		        /// <returns>A reference to the table.</returns>
		
		        Validate.isString(tableName, 'tableName');
		        Validate.notNullOrEmpty(tableName, 'tableName');
		        return new MobileServiceTable(tableName, this);
		    };
		
		    if (Push) {
		        this.push = new Push(this, MobileServiceClient._applicationInstallationId);
		    }
		}
		
		
		
		// Export the MobileServiceClient class
		exports.MobileServiceClient = MobileServiceClient;
		
		// Define the MobileServiceClient in a namespace (note: this has global effects
		// unless the platform we're using chooses to ignore it because exports are
		// good enough).
		Platform.addToMobileServicesClientNamespace({ MobileServiceClient: MobileServiceClient });
		
		MobileServiceClient.prototype.withFilter = function (serviceFilter) {
		    /// <summary>
		    /// Create a new MobileServiceClient with a filter used to process all
		    /// of its HTTP requests and responses.
		    /// </summary>
		    /// <param name="serviceFilter" type="Function">
		    /// The filter to use on the service.  The signature of a serviceFilter is
		    ///    function(request, next, callback)
		    ///  where
		    ///    next := function(request, callback)
		    ///    callback := function(error, response)
		    /// </param>
		    /// <returns type="MobileServiceClient">
		    /// A new MobileServiceClient whose HTTP requests and responses will be
		    /// filtered as desired.
		    /// </returns>
		    /// <remarks>
		    /// The Mobile Services HTTP pipeline is a chain of filters composed
		    /// together by giving each the next operation which it can invoke
		    /// (zero, one, or many times as necessary).  The default continuation
		    /// of a brand new MobileServiceClient will just get the HTTP response
		    /// for the corresponding request.  Here's an example of a Handle
		    /// implementation that will automatically retry a request that times
		    /// out.
		    ///     function(req, next, callback) {
		    ///         next(req, function(err, rsp) {
		    ///           if (rsp.statusCode >= 400) {
		    ///               next(req, callback);
		    ///           } else {
		    ///               callback(err, rsp);
		    ///           }
		    ///         });
		    ///     }
		    /// Note that because these operations are asynchronous, this sample
		    /// filter could end up actually making two HTTP requests before
		    /// returning a response to the developer without the developer writing
		    /// any special code to handle the situation.
		    /// -
		    /// Filters are composed just like standard function composition.  If
		    /// we had new MobileServiceClient().withFilter(F1).withFilter(F2)
		    /// .withFilter(F3), it's conceptually equivalent to saying:
		    ///     var response = F3(F2(F1(next(request)));
		    /// </remarks>
		
		    Validate.notNull(serviceFilter, 'serviceFilter');
		
		    // Clone the current instance
		    var client = new MobileServiceClient(this.applicationUrl);
		    client.currentUser = this.currentUser;
		
		    // Chain the service filter with any existing filters
		    var existingFilter = this._serviceFilter;
		    client._serviceFilter = _.isNull(existingFilter) ?
		        serviceFilter :
		        function (req, next, callback) {
		            // compose existingFilter with next so it can be used as the next
		            // of the new serviceFilter
		            var composed = function (req, callback) {
		                existingFilter(req, next, callback);
		            };
		            serviceFilter(req, composed, callback);
		        };
		
		    return client;
		};
		
		MobileServiceClient.prototype._request = function (method, uriFragment, content, ignoreFilters, headers, features, callback) {
		    /// <summary>
		    /// Perform a web request and include the standard Mobile Services headers.
		    /// </summary>
		    /// <param name="method" type="string">
		    /// The HTTP method used to request the resource.
		    /// </param>
		    /// <param name="uriFragment" type="String">
		    /// URI of the resource to request (relative to the Mobile Services
		    /// runtime).
		    /// </param>
		    /// <param name="content" type="Object">
		    /// Optional content to send to the resource.
		    /// </param>
		    /// <param name="ignoreFilters" type="Boolean" mayBeNull="true">
		    /// Optional parameter to indicate if the client filters should be ignored
		    /// and the request should be sent directly. Is false by default.
		    /// </param>
		    /// <param name="headers" type="Object">
		    /// Optional request headers
		    /// </param>
		    /// <param name="features" type="Array">
		    /// Codes for features which are used in this request, sent to the server for telemetry.
		    /// </param>
		    /// <param name="callback" type="function(error, response)">
		    /// Handler that will be called on the response.
		    /// </param>
		
		    // Account for absent optional arguments
		    if (_.isNull(callback) && (typeof features === 'function')) {
		        callback = features;
		        features = null;
		    }
		
		    if (_.isNull(callback) && (typeof headers === 'function')) {
		        callback = headers;
		        headers = null;
		    }
		
		    if (_.isNull(callback) && (typeof ignoreFilters === 'function')) {
		        callback = ignoreFilters;
		        ignoreFilters = false;
		    }
		
		    if (_.isNull(callback) && (typeof content === 'function')) {
		        callback = content;
		        content = null;
		    }
		
		    Validate.isString(method, 'method');
		    Validate.notNullOrEmpty(method, 'method');
		    Validate.isString(uriFragment, 'uriFragment');
		    Validate.notNull(uriFragment, 'uriFragment');
		    Validate.notNull(callback, 'callback');
		
		    // Create the absolute URI
		    var options = { type: method.toUpperCase() };
		    if (_.url.isAbsoluteUrl(uriFragment)) {
		        options.url = uriFragment;
		    } else {
		        options.url = _.url.combinePathSegments(this.applicationUrl, uriFragment);
		    }
		
		    // Set MobileServices authentication, application, User-Agent and telemetry headers
		    options.headers = {};
		    if (!_.isNull(headers)) {
		        _.extend(options.headers, headers);
		    }
		    options.headers["X-ZUMO-INSTALLATION-ID"] = MobileServiceClient._applicationInstallationId;
		    if (this.currentUser && !_.isNullOrEmpty(this.currentUser.mobileServiceAuthenticationToken)) {
		        options.headers["X-ZUMO-AUTH"] = this.currentUser.mobileServiceAuthenticationToken;
		    }
		    if (!_.isNull(MobileServiceClient._userAgent)) {
		        options.headers["User-Agent"] = MobileServiceClient._userAgent;
		    }
		    if (!_.isNullOrEmpty["X-ZUMO-VERSION"]) {
		        options.headers["X-ZUMO-VERSION"] = this.version;
		    }
		
		    if (_.isNull(options.headers[_zumoFeaturesHeaderName]) && features && features.length) {
		        options.headers[_zumoFeaturesHeaderName] = features.join(',');
		    }
		
		    // Add any content as JSON
		    if (!_.isNull(content)) {
		        if (!_.isString(content)) {
		            options.data = _.toJson(content);
		        } else {
		            options.data = content;
		        }
		
		        if (!_.hasProperty(options.headers, ['Content-Type', 'content-type', 'CONTENT-TYPE', 'Content-type'])) {
		            options.headers['Content-Type'] = 'application/json';
		        }
		    } else {
		        // options.data must be set to null if there is no content or the xhr object
		        // will set the content-type to "application/text" for non-GET requests.
		        options.data = null;
		    }
		
		    // Treat any >=400 status codes as errors.  Also treat the status code 0 as
		    // an error (which indicates a connection failure).
		    var handler = function (error, response) {
		        if (!_.isNull(error)) {
		            error = _.createError(error);
		        } else if (!_.isNull(response) && (response.status >= 400 || response.status === 0)) {
		            error = _.createError(null, response);
		            response = null;
		        }
		        callback(error, response);
		    };
		
		    // Make the web request
		    if (!_.isNull(this._serviceFilter) && !ignoreFilters) {
		        this._serviceFilter(options, Platform.webRequest, handler);
		    } else {
		        Platform.webRequest(options, handler);
		    }
		};
		
		MobileServiceClient.prototype.loginWithOptions = Platform.async(
		     function (provider, options, callback) {
		         /// <summary>
		         /// Log a user into a Mobile Services application given a provider name with
		         /// given options.
		         /// </summary>
		         /// <param name="provider" type="String" mayBeNull="false">
		         /// Name of the authentication provider to use; one of 'facebook', 'twitter', 'google', 
		         /// 'windowsazureactivedirectory' (can also use 'aad')
		         /// or 'microsoftaccount'.
		         /// </param>
		         /// <param name="options" type="Object" mayBeNull="true">
		         /// Contains additional parameter information, valid values are:
		         ///    token: provider specific object with existing OAuth token to log in with
		         ///    useSingleSignOn: Only applies to Windows 8 clients.  Will be ignored on other platforms.
		         /// Indicates if single sign-on should be used. Single sign-on requires that the 
		         /// application's Package SID be registered with the Microsoft Azure Mobile Service, 
		         /// but it provides a better experience as HTTP cookies are supported so that users 
		         /// do not have to login in everytime the application is launched.
		         ///    parameters: Any additional provider specific query string parameters.
		         /// </param>
		         /// <param name="callback" type="Function" mayBeNull="true">
		         /// Optional callback accepting (error, user) parameters.
		         /// </param>
		         this._login.loginWithOptions(provider, options, callback);
		     });
		
		MobileServiceClient.prototype.login = Platform.async(
		    function (provider, token, useSingleSignOn, callback) {
		        /// <summary>
		        /// Log a user into a Mobile Services application given a provider name and optional 
		        /// authentication token.
		        /// </summary>
		        /// <param name="provider" type="String" mayBeNull="true">
		        /// Name of the authentication provider to use; one of 'facebook', 'twitter', 'google', 
		        /// 'windowsazureactivedirectory' (can also use 'aad')
		        /// or 'microsoftaccount'. If no provider is specified, the 'token' parameter
		        /// is considered a Microsoft Account authentication token. If a provider is specified, 
		        /// the 'token' parameter is considered a provider-specific authentication token.
		        /// </param>
		        /// <param name="token" type="Object" mayBeNull="true">
		        /// Optional, provider specific object with existing OAuth token to log in with.
		        /// </param>
		        /// <param name="useSingleSignOn" type="Boolean" mayBeNull="true">
		        /// Only applies to Windows 8 clients.  Will be ignored on other platforms.
		        /// Indicates if single sign-on should be used. Single sign-on requires that the 
		        /// application's Package SID be registered with the Microsoft Azure Mobile Service, 
		        /// but it provides a better experience as HTTP cookies are supported so that users 
		        /// do not have to login in everytime the application is launched.
		        /// </param>
		        /// <param name="callback" type="Function" mayBeNull="true">
		        /// Optional callback accepting (error, user) parameters.
		        /// </param>
		        this._login.login(provider, token, useSingleSignOn, callback);
		    });
		
		MobileServiceClient.prototype.logout = function () {
		    /// <summary>
		    /// Log a user out of a Mobile Services application.
		    /// </summary>
		    this.currentUser = null;
		};
		
		MobileServiceClient.prototype.invokeApi = Platform.async(
		    function (apiName, options, callback) {
		        /// <summary>
		        /// Invokes the specified custom api and returns a response object.
		        /// </summary>
		        /// <param name="apiName">
		        /// The custom api to invoke.
		        /// </param>
		        /// <param name="options" mayBeNull="true">
		        /// Contains additional parameter information, valid values are:
		        /// body: The body of the HTTP request.
		        /// method: The HTTP method to use in the request, with the default being POST,
		        /// parameters: Any additional query string parameters, 
		        /// headers: HTTP request headers, specified as an object.
		        /// </param>
		        /// <param name="callback" type="Function" mayBeNull="true">
		        /// Optional callback accepting (error, results) parameters.
		        /// </param>
		
		        Validate.isString(apiName, 'apiName');
		
		        // Account for absent optional arguments
		        if (_.isNull(callback)) {
		            if (typeof options === 'function') {
		                callback = options;
		                options = null;
		            }
		        }
		        Validate.notNull(callback, 'callback');
		
		        var parameters, method, body, headers;
		        if (!_.isNull(options)) {
		            parameters = options.parameters;
		            if (!_.isNull(parameters)) {
		                Validate.isValidParametersObject(options.parameters);
		            }
		
		            method = options.method;
		            body = options.body;
		            headers = options.headers;
		        }
		
		        headers = headers || {};
		
		        if (_.isNull(method)) {
		            method = "POST";
		        }
		
		        // if not specified, default to return results in JSON format
		        if (_.isNull(headers.accept)) {
		            headers.accept = 'application/json';
		        }
		
		        // Add version header on API requests
		        if (_.isNull(headers[_zumoApiVersionHeaderName])) {
		            headers[_zumoApiVersionHeaderName] = _zumoApiVersion;
		        }
		
		        // Construct the URL
		        var urlFragment = _.url.combinePathSegments("api", apiName);
		        if (!_.isNull(parameters)) {
		            var queryString = _.url.getQueryString(parameters);
		            urlFragment = _.url.combinePathAndQuery(urlFragment, queryString);
		        }
		
		        var features = [];
		        if (!_.isNullOrEmpty(body)) {
		            features.push(_.isString(body) ?
		                _zumoFeatures.GenericApiCall :
		                _zumoFeatures.JsonApiCall);
		        }
		
		        if (!_.isNull(parameters)) {
		            features.push(_zumoFeatures.AdditionalQueryParameters);
		        }
		
		        // Make the request
		        this._request(
		            method,
		            urlFragment,
		            body,
		            null,
		            headers,
		            features,
		            function (error, response) {
		                if (!_.isNull(error)) {
		                    callback(error, null);
		                } else {
		                    var contentType;
		                    if (typeof response.getResponseHeader !== 'undefined') { // (when not using IframeTransport, IE9)
		                        contentType = response.getResponseHeader('Content-Type');
		                    }
		
		                    // If there was no header / can't get one, try json
		                    if (!contentType) {
		                        try {
		                            response.result = _.fromJson(response.responseText);
		                        } catch (e) {
		                            // Do nothing, since we don't know the content-type, failing may be ok
		                        }
		                    } else if (contentType.toLowerCase().indexOf('json') !== -1) {
		                        response.result = _.fromJson(response.responseText);
		                    }
		
		                    callback(null, response);
		                }
		            });
		
		    });
		
		function getApplicationInstallationId() {
		    /// <summary>
		    /// Gets or creates the static application installation ID.
		    /// </summary>
		    /// <returns type="string">
		    /// The application installation ID.
		    /// </returns>
		
		    // Get or create a new installation ID that can be passed along on each
		    // request to provide telemetry data
		    var applicationInstallationId = null;
		
		    // Check if the config settings exist
		    var path = "MobileServices.Installation.config";
		    var contents = Platform.readSetting(path);
		    if (!_.isNull(contents)) {
		        // Parse the contents of the file as JSON and pull out the
		        // application's installation ID.
		        try {
		            var config = _.fromJson(contents);
		            applicationInstallationId = config.applicationInstallationId;
		        } catch (ex) {
		            // Ignore any failures (like invalid JSON, etc.) which will allow
		            // us to fall through to and regenerate a valid config below
		        }
		    }
		
		    // If no installation ID was found, generate a new one and save the config
		    // settings.  This is pulled out as a separate function because we'll do it
		    // even if we successfully read an existing config but there's no
		    // installation ID.
		    if (_.isNullOrEmpty(applicationInstallationId)) {
		        applicationInstallationId = _.createUniqueInstallationId();
		
		        // TODO: How many other settings should we write out as well?
		        var configText = _.toJson({ applicationInstallationId: applicationInstallationId });
		        Platform.writeSetting(path, configText);
		    }
		
		    return applicationInstallationId;
		}
		
		/// <summary>
		/// Get or set the static _applicationInstallationId by checking the settings
		/// and create the value if necessary.
		/// </summary>
		MobileServiceClient._applicationInstallationId = getApplicationInstallationId();
		
		/// <summary>
		/// Get or set the static _userAgent by calling into the Platform.
		/// </summary>
		MobileServiceClient._userAgent = Platform.getUserAgent();
		
		/// <summary>
		/// The features that are sent to the server for telemetry.
		/// </summary>
		MobileServiceClient._zumoFeatures = _zumoFeatures;
		
		/// <summary>
		/// The header / querystring to use to specify the API Version
		/// </summary>
		MobileServiceClient._zumoApiVersionHeaderName = _zumoApiVersionHeaderName;
		
		/// <summary>
		/// The current Zumo API Version
		/// </summary>
		MobileServiceClient._zumoApiVersion = _zumoApiVersion;
		
	};

	$__modules__.MobileServiceTable = function (exports) {
		// ----------------------------------------------------------------------------
		// Copyright (c) Microsoft Corporation. All rights reserved.
		// ----------------------------------------------------------------------------
		
		/// <reference path="C:\Program Files (x86)\Microsoft SDKs\Windows\v8.0\ExtensionSDKs\Microsoft.WinJS.1.0\1.0\DesignTime\CommonConfiguration\Neutral\Microsoft.WinJS.1.0\js\base.js" />
		/// <reference path="C:\Program Files (x86)\Microsoft SDKs\Windows\v8.0\ExtensionSDKs\Microsoft.WinJS.1.0\1.0\DesignTime\CommonConfiguration\Neutral\Microsoft.WinJS.1.0\js\ui.js" />
		/// <reference path="Generated\MobileServices.DevIntellisense.js" />
		
		var _ = require('Extensions');
		var Validate = require('Validate');
		var Platform = require('Platform');
		var Query = require('Query').Query;
		
		// Name of the reserved Mobile Services ID member.
		var idPropertyName = "id";
		
		// The route separator used to denote the table in a uri like
		// .../{app}/collections/{coll}.
		var tableRouteSeperatorName = "tables";
		var idNames = ["ID", "Id", "id", "iD"];
		var nextLinkRegex = /^(.*?);\s*rel\s*=\s*(\w+)\s*$/;
		
		var MobileServiceSystemProperties = {
		    None: 0,
		    CreatedAt: 1,
		    UpdatedAt: 2,
		    Version: 4,
		    All: 0xFFFF
		};
		
		var MobileServiceSystemColumns = {
		    CreatedAt: "createdAt",
		    UpdatedAt: "updatedAt",
		    Version: "version",
		    Deleted: "deleted"
		};
		
		Platform.addToMobileServicesClientNamespace({
		    MobileServiceTable:
		        {
		            SystemProperties: MobileServiceSystemProperties
		        }
		});
		
		function MobileServiceTable(tableName, client) {
		    /// <summary>
		    /// Initializes a new instance of the MobileServiceTable class.
		    /// </summary>
		    /// <param name="tableName" type="String">
		    /// Name of the table.
		    /// </param>
		    /// <param name="client" type="MobileServiceClient" mayBeNull="false">
		    /// The MobileServiceClient used to make requests.
		    /// </param>
		
		    this.getTableName = function () {
		        /// <summary>
		        /// Gets the name of the table.
		        /// </summary>
		        /// <returns type="String">The name of the table.</returns>
		        return tableName;
		    };
		
		    this.getMobileServiceClient = function () {
		        /// <summary>
		        /// Gets the MobileServiceClient associated with this table.
		        /// </summary>
		        /// <returns type="MobileServiceClient">
		        /// The MobileServiceClient associated with this table.
		        /// </returns>
		        return client;
		    };
		}
		
		// Export the MobileServiceTable class
		exports.MobileServiceTable = MobileServiceTable;
		
		// We have an internal _read method using callbacks since it's used by both
		// table.read(query) and query.read().
		MobileServiceTable.prototype._read = function (query, parameters, callback) {
		    /// <summary>
		    /// Query a table.
		    /// </summary>
		    /// <param name="query" type="Object" mayBeNull="true">
		    /// The query to execute.  It can be null or undefined to get the entire
		    /// collection.
		    /// </param>
		    /// <param name="parameters" type="Object" mayBeNull="true">
		    /// An object of user-defined parameters and values to include in the request URI query string.
		    /// </param>
		    /// <param name="callback" type="Function">
		    /// The callback to invoke when the query is complete.
		    /// </param>
		
		    // Account for absent optional arguments
		    if (_.isNull(callback))
		    {
		        if (_.isNull(parameters) && (typeof query === 'function')) {
		            callback = query;
		            query = null;
		            parameters = null;
		        } else if (typeof parameters === 'function') {
		            callback = parameters;
		            parameters = null;
		            if (!_.isNull(query) && _.isObject(query)) {
		                // This 'query' argument could be either the query or the user-defined 
		                // parameters object since both are optional.  A query is either (a) a simple string 
		                // or (b) an Object with an toOData member. A user-defined parameters object is just 
		                // an Object.  We need to detect which of these has been passed in here.
		                if (!_.isString(query) && _.isNull(query.toOData)) {
		                    parameters = query;
		                    query = null;
		                }
		            }
		        }
		    }
		
		    // Validate the arguments
		    if (query && _.isString(query)) {
		        Validate.notNullOrEmpty(query, 'query');
		    }
		    if (!_.isNull(parameters)) {
		        Validate.isValidParametersObject(parameters, 'parameters');
		    }
		    Validate.notNull(callback, 'callback');
		
		    // Get the query string
		    var tableName = this.getTableName();
		    var queryString = null;
		    var projection = null;
		    var features = [];
		    if (_.isString(query)) {
		        queryString = query;
		        if (!_.isNullOrEmpty(query)) {
		            features.push(WindowsAzure.MobileServiceClient._zumoFeatures.TableReadRaw);
		        }
		    } else if (_.isObject(query) && !_.isNull(query.toOData)) {
		        if (query.getComponents) {
		            features.push(WindowsAzure.MobileServiceClient._zumoFeatures.TableReadQuery);
		            var components = query.getComponents();
		            projection = components.projection;
		            if (components.table) {
		                // If the query has a table name, make sure it's compatible with
		                // the table executing the query
		                
		                if (tableName !== components.table) {
		                    var message = _.format(Platform.getResourceString("MobileServiceTable_ReadMismatchedQueryTables"), tableName, components.table);
		                    callback(_.createError(message), null);
		                    return;
		                }
		
		                // The oDataQuery will include the table name; we need to remove
		                // because the url fragment already includes the table name.
		                var oDataQuery = query.toOData();
		                queryString = oDataQuery.replace(new RegExp('^/' + components.table), '');
		            }
		        }
		    }
		
		    addQueryParametersFeaturesIfApplicable(features, parameters);
		
		    // Add any user-defined query string parameters
		    if (!_.isNull(parameters)) {
		        var userDefinedQueryString = _.url.getQueryString(parameters);
		        if (!_.isNullOrEmpty(queryString)) {
		            queryString += '&' + userDefinedQueryString;
		        }
		        else {
		            queryString = userDefinedQueryString;
		        }
		    }
		    
		    // Construct the URL
		    var urlFragment = queryString;
		    if (!_.url.isAbsoluteUrl(urlFragment)) {
		        urlFragment = _.url.combinePathSegments(tableRouteSeperatorName, tableName);
		        if (!_.isNull(queryString)) {
		            urlFragment = _.url.combinePathAndQuery(urlFragment, queryString);
		        }
		    }
		
		    var headers = { };
		    headers[WindowsAzure.MobileServiceClient._zumoApiVersionHeaderName] = WindowsAzure.MobileServiceClient._zumoApiVersion;
		
		    // Make the request
		    this.getMobileServiceClient()._request(
		        'GET',
		        urlFragment,
		        null,
		        false,
		        headers,
		        features,
		        function (error, response) {
		            var values = null;
		            if (_.isNull(error)) {
		                // Parse the response
		                values = _.fromJson(response.responseText);
		
		                // If the values include the total count, we'll attach that
		                // directly to the array
		                if (values &&
		                    !Array.isArray(values) &&
		                    typeof values.count !== 'undefined' &&
		                    typeof values.results !== 'undefined') {
		                    // Create a new total count property on the values array
		                    values.results.totalCount = values.count;
		                    values = values.results;
		                }
		
		                // If we have a projection function, apply it to each item
		                // in the collection
		                if (projection !== null) {
		                    var i = 0;
		                    for (i = 0; i < values.length; i++) {
		                        values[i] = projection.call(values[i]);
		                    }
		                }
		
		                // Grab link header when possible
		                if (Array.isArray(values) && response.getResponseHeader && _.isNull(values.nextLink)) {
		                    try {
		                        var link = response.getResponseHeader('Link');
		                        if (!_.isNullOrEmpty(link)) {
		                            var result = nextLinkRegex.exec(link);
		
		                            // Only add nextLink when relation is next
		                            if (result && result.length === 3 && result[2] == 'next') {
		                                values.nextLink = result[1];
		                            }
		                        }
		                    } catch (ex) {
		                        // If cors doesn't allow us to access the Link header
		                        // Just continue on without it
		                    }
		                }
		            }
		            callback(error, values);
		        });
		};
		
		MobileServiceTable.prototype.read = Platform.async(MobileServiceTable.prototype._read);
		
		MobileServiceTable.prototype.insert = Platform.async(
		    function (instance, parameters, callback) {
		        /// <summary>
		        /// Insert a new object into a table.
		        /// </summary>
		        /// <param name="instance" type="Object">
		        /// The instance to insert into the table.
		        /// </param>
		        /// <param name="parameters" type="Object" mayBeNull="true">
		        /// An object of user-defined parameters and values to include in the request URI query string.
		        /// </param>
		        /// <param name="callback" type="Function">
		        /// The callback to invoke when the insert is complete.
		        /// </param>
		
		        // Account for absent optional arguments
		        if (_.isNull(callback) && (typeof parameters === 'function')) {
		            callback = parameters;
		            parameters = null;
		        }
		
		        // Validate the arguments
		        Validate.notNull(instance, 'instance');
		        if (!_.isNull(parameters)) {
		            Validate.isValidParametersObject(parameters);
		        }
		        Validate.notNull(callback, 'callback');
		
		        // Integer Ids can not have any Id set
		        for (var i in idNames) {
		            var id = instance[idNames[i]];
		
		            if (!_.isNullOrZero(id)) {
		                if (_.isString(id)) {
		                    // String Id's are allowed iif using 'id'
		                    if (idNames[i] !== idPropertyName) {
		                        throw _.format(
		                            Platform.getResourceString("MobileServiceTable_InsertIdAlreadySet"),
		                            idPropertyName);
		                    } else {
		                        Validate.isValidId(id, idPropertyName);
		                    }
		                } else {
		                    throw _.format(
		                        Platform.getResourceString("MobileServiceTable_InsertIdAlreadySet"),
		                        idPropertyName);
		                }
		            }
		        }
		
		        var features = addQueryParametersFeaturesIfApplicable([], parameters);
		
		        // Construct the URL
		        var urlFragment = _.url.combinePathSegments(tableRouteSeperatorName, this.getTableName());
		        if (!_.isNull(parameters)) {
		            var queryString = _.url.getQueryString(parameters);
		            urlFragment = _.url.combinePathAndQuery(urlFragment, queryString);
		        }
		
		        var headers = { };
		        headers[WindowsAzure.MobileServiceClient._zumoApiVersionHeaderName] = WindowsAzure.MobileServiceClient._zumoApiVersion;
		
		        // Make the request
		        this.getMobileServiceClient()._request(
		            'POST',
		            urlFragment,
		            instance,
		            false,
		            headers,
		            features,
		            function (error, response) {
		                if (!_.isNull(error)) {
		                    callback(error, null);
		                } else {
		                    var result = getItemFromResponse(response);
		                    result = Platform.allowPlatformToMutateOriginal(instance, result);
		                    callback(null, result);
		                }
		            });
		    });
		
		MobileServiceTable.prototype.update = Platform.async(
		    function (instance, parameters, callback) {
		        /// <summary>
		        /// Update an object in a given table.
		        /// </summary>
		        /// <param name="instance" type="Object">
		        /// The instance to update in the table.
		        /// </param>
		        /// <param name="parameters" type="Object" mayBeNull="true">
		        /// An object of user-defined parameters and values to include in the request URI query string.
		        /// </param>
		        /// <param name="callback" type="Function">
		        /// The callback to invoke when the update is complete.
		        /// </param>
		        var version,
		            headers = {},
		            features = [],
		            serverInstance;
		
		        // Account for absent optional arguments
		        if (_.isNull(callback) && (typeof parameters === 'function')) {
		            callback = parameters;
		            parameters = null;
		        }
		
		        // Validate the arguments
		        Validate.notNull(instance, 'instance');
		        Validate.isValidId(instance[idPropertyName], 'instance.' + idPropertyName);
		        if (!_.isNull(parameters)) {
		            Validate.isValidParametersObject(parameters, 'parameters');
		        }
		        Validate.notNull(callback, 'callback');
		
		        version = instance[MobileServiceSystemColumns.Version];
		        serverInstance = removeSystemProperties(instance);
		
		        if (!_.isNullOrEmpty(version)) {
		            headers['If-Match'] = getEtagFromVersion(version);
		            features.push(WindowsAzure.MobileServiceClient._zumoFeatures.OptimisticConcurrency);
		        }
		
		        headers[WindowsAzure.MobileServiceClient._zumoApiVersionHeaderName] = WindowsAzure.MobileServiceClient._zumoApiVersion;
		
		        features = addQueryParametersFeaturesIfApplicable(features, parameters);
		
		        // Construct the URL
		        var urlFragment =  _.url.combinePathSegments(
		                tableRouteSeperatorName,
		                this.getTableName(),
		                encodeURIComponent(instance[idPropertyName].toString()));
		        if (!_.isNull(parameters)) {
		            var queryString = _.url.getQueryString(parameters);
		            urlFragment = _.url.combinePathAndQuery(urlFragment, queryString);
		        }
		
		        // Make the request
		        this.getMobileServiceClient()._request(
		            'PATCH',
		            urlFragment,
		            serverInstance,
		            false,
		            headers,
		            features,
		            function (error, response) {
		                if (!_.isNull(error)) {
		                    setServerItemIfPreconditionFailed(error);
		                    callback(error);
		                } else {
		                    var result = getItemFromResponse(response);
		                    result = Platform.allowPlatformToMutateOriginal(instance, result);
		                    callback(null, result);
		                }
		            });
		    });
		
		MobileServiceTable.prototype.refresh = Platform.async(
		    function (instance, parameters, callback) {
		        /// <summary>
		        ///  Refresh the current instance with the latest values from the
		        ///  table.
		        /// </summary>
		        /// <param name="instance" type="Object">
		        /// The instance to refresh.
		        /// </param>
		        /// <param name="parameters" type="Object" mayBeNull="true">
		        /// An object of user-defined parameters and values to include in the request URI query string.
		        /// </param>
		        /// <param name="callback" type="Function">
		        /// The callback to invoke when the refresh is complete.
		        /// </param>
		
		        // Account for absent optional arguments
		        if (_.isNull(callback) && (typeof parameters === 'function')) {
		            callback = parameters;
		            parameters = null;
		        }
		
		        // Validate the arguments
		        Validate.notNull(instance, 'instance');
		        if (!_.isValidId(instance[idPropertyName], idPropertyName))
		        {
		            if (typeof instance[idPropertyName] === 'string' && instance[idPropertyName] !== '') {
		                throw _.format(Platform.getResourceString("Validate_InvalidId"), idPropertyName);
		            } else {
		                callback(null, instance);
		            }
		            return;
		        }
		
		        if (!_.isNull(parameters)) {
		            Validate.isValidParametersObject(parameters, 'parameters');
		        }
		        Validate.notNull(callback, 'callback');
		
		        // Construct the URL
		        var urlFragment = _.url.combinePathSegments(
		                tableRouteSeperatorName,
		                this.getTableName());
		
		        if (typeof instance[idPropertyName] === 'string') {
		            var id = encodeURIComponent(instance[idPropertyName]).replace(/\'/g, '%27%27');
		            urlFragment = _.url.combinePathAndQuery(urlFragment, "?$filter=id eq '" + id + "'");
		        } else {
		            urlFragment = _.url.combinePathAndQuery(urlFragment, "?$filter=id eq " + encodeURIComponent(instance[idPropertyName].toString()));
		        }
		
		        if (!_.isNull(parameters)) {
		            var queryString = _.url.getQueryString(parameters);
		            urlFragment = _.url.combinePathAndQuery(urlFragment, queryString);
		        }
		
		        var features = [WindowsAzure.MobileServiceClient._zumoFeatures.TableRefreshCall];
		        features = addQueryParametersFeaturesIfApplicable(features, parameters);
		
		        var headers = { };
		        headers[WindowsAzure.MobileServiceClient._zumoApiVersionHeaderName] = WindowsAzure.MobileServiceClient._zumoApiVersion;
		
		        // Make the request
		        this.getMobileServiceClient()._request(
		            'GET',
		            urlFragment,
		            instance,
		            false,
		            headers,
		            features,
		            function (error, response) {
		                if (!_.isNull(error)) {
		                    callback(error, null);
		                } else {
		                    var result = _.fromJson(response.responseText);
		                    if (Array.isArray(result)) {
		                        result = result[0]; //get first object from array
		                    }
		
		                    if (!result) {
		                        var message =_.format(
		                            Platform.getResourceString("MobileServiceTable_NotSingleObject"),
		                            idPropertyName);
		                        callback(_.createError(message), null);
		                    }
		
		                    result = Platform.allowPlatformToMutateOriginal(instance, result);
		                    callback(null, result);
		                }
		            });
		    });
		
		MobileServiceTable.prototype.lookup = Platform.async(
		    function (id, parameters, callback) {
		        /// <summary>
		        /// Gets an instance from a given table.
		        /// </summary>
		        /// <param name="id" type="Number" integer="true">
		        /// The id of the instance to get from the table.
		        /// </param>
		        /// <param name="parameters" type="Object" mayBeNull="true">
		        /// An object of user-defined parameters and values to include in the request URI query string.
		        /// </param>
		        /// <param name="callback" type="Function">
		        /// The callback to invoke when the lookup is complete.
		        /// </param>
		
		        // Account for absent optional arguments
		        if (_.isNull(callback) && (typeof parameters === 'function')) {
		            callback = parameters;
		            parameters = null;
		        }
		
		        // Validate the arguments
		        Validate.isValidId(id, idPropertyName);
		        if (!_.isNull(parameters)) {
		            Validate.isValidParametersObject(parameters);
		        }
		        Validate.notNull(callback, 'callback');
		
		        // Construct the URL
		        var urlFragment = _.url.combinePathSegments(
		                tableRouteSeperatorName,
		                this.getTableName(),
		                encodeURIComponent(id.toString()));
		
		        var features = addQueryParametersFeaturesIfApplicable([], parameters);
		
		        if (!_.isNull(parameters)) {
		            var queryString = _.url.getQueryString(parameters);
		            urlFragment = _.url.combinePathAndQuery(urlFragment, queryString);
		        }
		
		        var headers = { };
		        headers[WindowsAzure.MobileServiceClient._zumoApiVersionHeaderName] = WindowsAzure.MobileServiceClient._zumoApiVersion;
		
		        // Make the request
		        this.getMobileServiceClient()._request(
		            'GET',
		            urlFragment,
		            null,
		            false,
		            headers,
		            features,
		            function (error, response) {
		                if (!_.isNull(error)) {
		                    callback(error, null);
		                } else {
		                    var result = getItemFromResponse(response);
		                    callback(null, result);
		                }
		            });
		    });
		
		MobileServiceTable.prototype.del = Platform.async(
		    function (instance, parameters, callback) {
		        /// <summary>
		        /// Delete an object from a given table.
		        /// </summary>
		        /// <param name="instance" type="Object">
		        /// The instance to delete from the table.
		        /// </param>
		        /// <param name="parameters" type="Object" mayBeNull="true">
		        /// An object of user-defined parameters and values to include in the request URI query string.
		        /// </param>
		        /// <param name="callback" type="Function">
		        /// The callback to invoke when the delete is complete.
		        /// </param>
		
		        // Account for absent optional arguments
		        if (_.isNull(callback) && (typeof parameters === 'function')) {
		            callback = parameters;
		            parameters = null;
		        }        
		
		        // Validate the arguments
		        Validate.notNull(instance, 'instance');
		        Validate.isValidId(instance[idPropertyName], 'instance.' + idPropertyName);
		        Validate.notNull(callback, 'callback');
		
		        var headers = {};
		        var features = [];
		        if (_.isString(instance[idPropertyName])) {
		            if (!_.isNullOrEmpty(instance[MobileServiceSystemColumns.Version])) {
		                headers['If-Match'] = getEtagFromVersion(instance[MobileServiceSystemColumns.Version]);
		                features.push(WindowsAzure.MobileServiceClient._zumoFeatures.OptimisticConcurrency);
		            }
		        }
		        headers[WindowsAzure.MobileServiceClient._zumoApiVersionHeaderName] = WindowsAzure.MobileServiceClient._zumoApiVersion;
		
		        features = addQueryParametersFeaturesIfApplicable(features, parameters);
		
		        if (!_.isNull(parameters)) {
		            Validate.isValidParametersObject(parameters);
		        }
		
		        // Contruct the URL
		        var urlFragment =  _.url.combinePathSegments(
		                tableRouteSeperatorName,
		                this.getTableName(),
		                encodeURIComponent(instance[idPropertyName].toString()));
		        if (!_.isNull(parameters)) {
		            var queryString = _.url.getQueryString(parameters);
		            urlFragment = _.url.combinePathAndQuery(urlFragment, queryString);
		        }
		
		        // Make the request
		        this.getMobileServiceClient()._request(
		            'DELETE',
		            urlFragment,
		            null,
		            false,
		            headers,
		            features,
		            function (error, response) {
		                if (!_.isNull(error)) {
		                    setServerItemIfPreconditionFailed(error);
		                }
		                callback(error);
		            });
		    });
		
		// Copy select Query operators to MobileServiceTable so queries can be created
		// compactly.  We'll just add them to the MobileServiceTable prototype and then
		// forward on directly to a new Query instance.
		var queryOperators =
		    ['where', 'select', 'orderBy', 'orderByDescending', 'skip', 'take', 'includeTotalCount'];
		var copyOperator = function (operator) {
		    MobileServiceTable.prototype[operator] = function () {
		        /// <summary>
		        /// Creates a new query.
		        /// </summary>
		
		        // Create a query associated with this table
		        var table = this;
		        var query = new Query(table.getTableName());
		
		        // Add a .read() method on the query which will execute the query.
		        // This method is defined here per query instance because it's
		        // implicitly tied to the table.
		        query.read = Platform.async(
		            function (parameters, callback) {
		                /// <summary>
		                /// Execute the query.
		                /// </summary>                
		                table._read(query, parameters, callback);
		            });
		
		        // Invoke the query operator on the newly created query
		        return query[operator].apply(query, arguments);
		    };
		};
		var i = 0;
		for (; i < queryOperators.length; i++) {
		    // Avoid unintended closure capture
		    copyOperator(queryOperators[i]);
		}
		
		// Table system properties
		function removeSystemProperties(instance) {
		    var copy = {};
		    for (var property in instance) {
		        if ((property != MobileServiceSystemColumns.Version) &&
		            (property != MobileServiceSystemColumns.UpdatedAt) &&
		            (property != MobileServiceSystemColumns.CreatedAt) &&
		            (property != MobileServiceSystemColumns.Deleted))
		        {
		            copy[property] = instance[property];
		        }
		    }
		    return copy;
		}
		
		// Add double quotes and unescape any internal quotes
		function getItemFromResponse(response) {
		    var result = _.fromJson(response.responseText);
		    if (response.getResponseHeader) {
		        var eTag = response.getResponseHeader('ETag');
		        if (!_.isNullOrEmpty(eTag)) {
		            result[MobileServiceSystemColumns.Version] = getVersionFromEtag(eTag);
		        }
		    }
		    return result;
		}
		
		// Converts an error to precondition failed error
		function setServerItemIfPreconditionFailed(error) {
		    if (error.request && error.request.status === 412) {
		        error.serverInstance = _.fromJson(error.request.responseText);
		    }
		}
		
		// Add wrapping double quotes and escape all double quotes
		function getEtagFromVersion(version) {
		    var result = version.replace(/\"/g, '\\\"');
		    return "\"" + result + "\"";
		}
		
		// Remove surrounding double quotes and unescape internal quotes
		function getVersionFromEtag(etag) {
		    var len = etag.length,
		        result = etag;
		
		    if (len > 1 && etag[0] === '"' && etag[len - 1] === '"') {
		        result = etag.substr(1, len - 2);
		    }
		    return result.replace(/\\\"/g, '"');
		}
		
		// Updates and returns the headers parameters with features used in the call
		function addQueryParametersFeaturesIfApplicable(features, userQueryParameters) {
		    var hasQueryParameters = false;
		    if (userQueryParameters) {
		        if (Array.isArray(userQueryParameters)) {
		            hasQueryParameters = userQueryParameters.length > 0;
		        } else if (_.isObject(userQueryParameters)) {
		            for (var k in userQueryParameters) {
		                hasQueryParameters = true;
		                break;
		            }
		        }
		    }
		
		    if (hasQueryParameters) {
		        features.push(WindowsAzure.MobileServiceClient._zumoFeatures.AdditionalQueryParameters);
		    }
		
		    return features;
		}
		
	};

	$__modules__.MobileServiceLogin = function (exports) {
		// ----------------------------------------------------------------------------
		// Copyright (c) Microsoft Corporation. All rights reserved.
		// ----------------------------------------------------------------------------
		
		/// <reference path="C:\Program Files (x86)\Microsoft SDKs\Windows\v8.0\ExtensionSDKs\Microsoft.WinJS.1.0\1.0\DesignTime\CommonConfiguration\Neutral\Microsoft.WinJS.1.0\js\base.js" />
		/// <reference path="C:\Program Files (x86)\Microsoft SDKs\Windows\v8.0\ExtensionSDKs\Microsoft.WinJS.1.0\1.0\DesignTime\CommonConfiguration\Neutral\Microsoft.WinJS.1.0\js\ui.js" />
		/// <reference path="Generated\MobileServices.DevIntellisense.js" />
		
		var _ = require('Extensions');
		var Validate = require('Validate');
		var Platform = require('Platform');
		
		var loginUrl = ".auth/login";
		var loginDone = "done";
		var sessionModeKey = 'session_mode';
		var sessionModeValueToken = 'token';
		
		function MobileServiceLogin(client, ignoreFilters) {
		    /// <summary>
		    /// Initializes a new instance of the MobileServiceLogin class.
		    /// </summary>
		    /// <param name="client" type="MobileServiceClient" mayBeNull="false">
		    /// Reference to the MobileServiceClient associated with this login.
		    /// </param>
		    /// <param name="ignoreFilters" type="Boolean" mayBeNull="true">
		    /// Optional parameter to indicate if the client filters should be ignored
		    /// and requests should be sent directly. Is true by default. This should
		    /// only be set to false for testing purposes when filters are needed to intercept
		    /// and validate requests and responses.
		    /// </param>
		
		    // Account for absent optional arguments
		    if (_.isNull(ignoreFilters)) {
		        ignoreFilters = true;
		    }
		
		    // Validate arguments
		    Validate.notNull(client);
		    Validate.isObject(client, 'client');
		
		    // Create read/write fields
		    this._loginState = { inProcess: false, cancelCallback: null };
		    this.ignoreFilters = ignoreFilters;
		
		    // Create get accessors for read-only fields
		    this.getMobileServiceClient = function () {
		        /// <summary>
		        /// Gets the MobileServiceClient associated with this table.
		        /// <summary>
		        /// <returns type="MobileServiceClient">
		        /// The MobileServiceClient associated with this table.
		        /// </returns>
		        return client;
		    };
		
		    this.getLoginInProcess = function () {
		        /// <summary>
		        /// Indicates if a login is currently in process or not.
		        /// <summary>
		        /// <returns type="Boolean">
		        /// True if a login is in process and false otherwise.
		        /// </returns>
		        return this._loginState.inProcess;
		    };
		}
		
		// Export the MobileServiceLogin class
		exports.MobileServiceLogin = MobileServiceLogin;
		
		// Define the MobileServiceLogin in a namespace (note: this has global effects
		// unless the platform we're using chooses to ignore it because exports are
		// good enough).
		Platform.addToMobileServicesClientNamespace({ MobileServiceLogin: MobileServiceLogin });
		
		MobileServiceLogin.prototype.loginWithOptions = function (provider, options, callback) {
		    /// <summary>
		    /// Log a user into a Mobile Services application given a provider name with
		    /// given options.
		    /// </summary>
		    /// <param name="provider" type="String" mayBeNull="false">
		    /// Name of the authentication provider to use; one of 'facebook', 'twitter', 'google', 
		    /// 'windowsazureactivedirectory' (can also use 'aad')
		    /// or 'microsoftaccount'.
		    /// </param>
		    /// <param name="options" type="Object" mayBeNull="true">
		    /// Contains additional parameter information, valid values are:
		    ///    token: provider specific object with existing OAuth token to log in with
		    ///    useSingleSignOn: Only applies to Windows 8 clients.  Will be ignored on other platforms.
		    /// Indicates if single sign-on should be used. Single sign-on requires that the 
		    /// application's Package SID be registered with the Microsoft Azure Mobile Service, 
		    /// but it provides a better experience as HTTP cookies are supported so that users 
		    /// do not have to login in everytime the application is launched.
		    ///    parameters: Any additional provider specific query string parameters.
		    /// </param>
		    /// <param name="callback" type="Function" mayBeNull="true">
		    /// Optional callback accepting (error, user) parameters.
		    /// </param>
		
		    Validate.isString(provider, 'provider');
		    Validate.notNull(provider, 'provider');
		
		    if (_.isNull(callback)) {
		        if (!_.isNull(options) && typeof options === 'function') {
		            callback = options;
		            options = null;
		        } else {
		            Validate.notNull(null, 'callback');
		        }
		    }
		
		    // loginWithOptions('a.b.c')
		    if (!options && this._isAuthToken(provider)) {
		        this.loginWithMobileServiceToken(provider, callback);
		    } else {
		        // loginWithOptions('facebook', {});
		        // loginWithOptions('facebook');
		        options = options || {};
		        this.loginWithProvider(provider, options.token, options.useSingleSignOn, options.parameters, callback);
		    }
		};
		
		MobileServiceLogin.prototype.login = function (provider, token, useSingleSignOn, callback) {
		    /// <summary>
		    /// Log a user into a Mobile Services application given a provider name and optional token object
		    /// Microsoft Account authentication token.
		    /// </summary>
		    /// <param name="provider" type="String" mayBeNull="true">
		    /// Optional name of the authentication provider to use; one of 'facebook', 'twitter', 'google',
		    /// 'windowsazureactivedirectory' (can also use 'aad'), or 'microsoftaccount'.
		    /// </param>
		    /// <param name="token" type="Object"  mayBeNull="true">
		    /// Optional provider specific object with existing OAuth token to log in with or
		    /// a JWT Mobile Services authentication token if the provider is null.
		    /// </param>
		    /// <param name="useSingleSignOn" type="Boolean" mayBeNull="true">
		    /// Only applies to Windows 8 clients.  Will be ignored on other platforms.
		    /// Indicates if single sign-on should be used. Single sign-on requires that the 
		    /// application's Package SID be registered with the Microsoft Azure Mobile Service, 
		    /// but it provides a better experience as HTTP cookies are supported so that users 
		    /// do not have to login in everytime the application is launched.
		    /// </param>
		    /// <param name="callback" type="Function"  mayBeNull="true">
		    /// Optional callback accepting (error, user) parameters.
		    /// </param>
		
		    // Account for absent optional arguments
		    if (_.isNull(callback)) {
		        if (!_.isNull(useSingleSignOn) && (typeof useSingleSignOn === 'function')) {
		            callback = useSingleSignOn;
		            useSingleSignOn = null;
		        }
		        else if (!_.isNull(token) && (typeof token === 'function')) {
		            callback = token;
		            useSingleSignOn = null;
		            token = null;
		        }
		    }
		    if (_.isNull(useSingleSignOn)) {
		        if (_.isBool(token)) {
		            useSingleSignOn = token;
		            token = null;
		        }
		        else {
		            useSingleSignOn = false;
		        }
		    }
		
		    // Determine if the provider is actually a Mobile Services authentication token
		    if (_.isNull(token) && this._isAuthToken(provider)) {
		        token = provider;
		        provider = null;
		    }
		
		    // Validate parameters; there must be either a provider, a token or both
		    if (_.isNull(provider)) {
		        Validate.notNull(token);
		        Validate.isString(token);
		    }
		    if (_.isNull(token)) {
		        Validate.notNull(provider);
		        Validate.isString(provider);
		        provider = provider.toLowerCase();
		    }
		
		    if (!_.isNull(provider)) {
		        if (provider.toLowerCase() === 'windowsazureactivedirectory') {
		            // The mobile service REST API uses '/login/aad' for Microsoft Azure Active Directory
		            provider = 'aad';
		        }
		        this.loginWithProvider(provider, token, useSingleSignOn, {}, callback);
		    }
		    else {
		        this.loginWithMobileServiceToken(token, callback);
		    }
		};
		
		MobileServiceLogin.prototype._isAuthToken = function (value) {
		    return value && _.isString(value) && value.split('.').length === 3;
		};
		
		MobileServiceLogin.prototype.loginWithMobileServiceToken = function (authenticationToken, callback) {
		    /// <summary>
		    /// Log a user into a Mobile Services application given an Mobile Service authentication token.
		    /// </summary>
		    /// <param name="authenticationToken" type="String">
		    /// OAuth access token that authenticates the user.
		    /// </param>
		    /// <param name="callback" type="Function">
		    /// Optional callback accepting (error, user) parameters.
		    /// </param>
		
		    var self = this;
		    var client = self.getMobileServiceClient();
		
		    Validate.isString(authenticationToken, 'authenticationToken');
		    Validate.notNullOrEmpty(authenticationToken, 'authenticationToken');
		
		    client._request(
		        'POST',
		        loginUrl,
		        { authenticationToken: authenticationToken },
		        self.ignoreFilters,
		        function (error, response) {
		            onLoginResponse(error, response, client, callback);
		        });
		};
		
		MobileServiceLogin.prototype.loginWithProvider = function (provider, token, useSingleSignOn, parameters, callback) {
		    /// <summary>
		    /// Log a user into a Mobile Services application given a provider name and optional token object.
		    /// </summary>
		    /// <param name="provider" type="String">
		    /// Name of the authentication provider to use; one of 'facebook', 'twitter', 'google',
		    /// 'windowsazureactivedirectory' (can also use 'aad'), or 'microsoftaccount'.
		    /// </param>
		    /// <param name="token" type="Object">
		    /// Optional, provider specific object with existing OAuth token to log in with.
		    /// </param>
		    /// <param name="useSingleSignOn" type="Boolean">
		    /// Optional, indicates if single sign-on should be used.  Single sign-on requires that the
		    /// application's Package SID be registered with the Microsoft Azure Mobile Service, but it
		    /// provides a better experience as HTTP cookies are supported so that users do not have to
		    /// login in everytime the application is launched. Is false be default.
		    /// </param>
		    /// <param name="parameters" type="Object">
		    /// Any additional provider specific query string parameters. 
		    /// </param>
		    /// <param name="callback" type="Function">
		    /// The callback to execute when the login completes: callback(error, user).
		    /// </param>
		
		    // Validate arguments
		    Validate.isString(provider, 'provider');
		    if (!_.isNull(token)) {
		        Validate.isObject(token, 'token');
		    }
		
		    // Throw if a login is already in process and is not cancellable
		    if (this._loginState.inProcess) {
		        var didCancel = this._loginState.cancelCallback && this._loginState.cancelCallback();
		        if (!didCancel) {
		            throw Platform.getResourceString("MobileServiceLogin_LoginErrorResponse");
		        }
		    }
		
		    provider = provider.toLowerCase();
		
		    // Either login with the token or the platform specific login control.
		    if (!_.isNull(token)) {
		        loginWithProviderAndToken(this, provider, token, parameters, callback);
		    }
		    else {
		        loginWithLoginControl(this, provider, useSingleSignOn, parameters, callback);
		    }
		};
		
		function onLoginComplete(error, token, client, callback) {
		    /// <summary>
		    /// Handles the completion of the login and calls the user's callback with
		    /// either a user or an error.
		    /// </summary>
		    /// <param name="error" type="string" mayBeNull="true">
		    /// Optional error that may have occurred during login. Will be null if the
		    /// login succeeded and their is a token.
		    /// </param>
		    /// <param name="token" type="string" mayBeNull="true">
		    /// Optional token that represents the logged-in user. Will be null if the
		    /// login failed and their is an error.
		    /// </param>
		    /// <param name="client" type="MobileServiceClient">
		    /// The Mobile Service client associated with the login.
		    /// </param>
		    /// <param name="callback" type="Function" mayBeNull="true">
		    /// The callback to execute when the login completes: callback(error, user).
		    /// </param>
		    var user = null;
		
		    if (_.isNull(error)) {
		
		        // Validate the token
		        if (_.isNull(token) ||
		            !_.isObject(token) ||
		            !_.isObject(token.user) ||
		            !_.isString(token.authenticationToken)) {
		            error = Platform.getResourceString("MobileServiceLogin_InvalidResponseFormat");
		        }
		        else {
		            // Set the current user on the client and return it in the callback
		            client.currentUser = token.user;
		            client.currentUser.mobileServiceAuthenticationToken = token.authenticationToken;
		            user = client.currentUser;
		        }
		    }
		
		    if (!_.isNull(callback)) {
		        callback(error, user);
		    }
		}
		
		function onLoginResponse(error, response, client, callback) {
		    /// <summary>
		    /// Handles the completion of the login HTTP call and calls the user's callback with
		    /// either a user or an error.
		    /// </summary>
		    /// <param name="error" type="string" mayBeNull="true">
		    /// Optional error that may have occurred during login. Will be null if the
		    /// login succeeded and their is a token.
		    /// </param>
		    /// <param name="response" type="string" mayBeNull="true">
		    /// Optional HTTP login response from the Mobile Service. Will be null if the
		    /// login failed and their is an error.
		    /// </param>
		    /// <param name="client" type="MobileServiceClient">
		    /// The Mobile Service client associated with the login.
		    /// </param>
		    /// <param name="callback" type="Function" mayBeNull="true">
		    /// The callback to execute when the login completes: callback(error, user).
		    /// </param>
		
		    var mobileServiceToken = null;
		    if (_.isNull(error)) {
		        try {
		            mobileServiceToken = _.fromJson(response.responseText);
		        }
		        catch (e) {
		            error = e;
		        }
		    }
		
		    onLoginComplete(error, mobileServiceToken, client, callback);
		}
		
		function loginWithProviderAndToken(login, provider, token, parameters, callback) {
		    /// <summary>
		    /// Log a user into a Mobile Services application given a provider name and token object.
		    /// </summary>
		    /// <param name="login" type="MobileServiceLogin">
		    /// The login instance that holds the context used with the login process.
		    /// </param>
		    /// <param name="provider" type="String">
		    /// Name of the authentication provider to use; one of 'facebook', 'twitter', 'google', or 
		    /// 'microsoftaccount'. The provider should already have been validated.
		    /// </param>
		    /// <param name="token" type="Object">
		    /// Provider specific object with existing OAuth token to log in with.
		    /// </param>
		    /// <param name="parameters" type="Object">
		    /// Any additional provider specific query string parameters.
		    /// </param>
		    /// <param name="callback" type="Function" mayBeNull="true">
		    /// The callback to execute when the login completes: callback(error, user).
		    /// </param>
		
		    var client = login.getMobileServiceClient();
		
		    // This design has always been problematic, because the operation can take arbitrarily
		    // long and there is no way for the UI to cancel it. We should probably remove this
		    // one-at-a-time restriction.
		    login._loginState = { inProcess: true, cancelCallback: null };
		
		    var url = loginUrl + '/' + provider;
		    if (!_.isNull(parameters)) {
		        var queryString = _.url.getQueryString(parameters);
		        url = _.url.combinePathAndQuery(url, queryString);
		    }
		
		    // Invoke the POST endpoint to exchange provider-specific token for a 
		    // Microsoft Azure Mobile Services token
		    client._request(
		        'POST',
		        url,
		        token,
		        login.ignoreFilters,
		        function (error, response) {
		            login._loginState = { inProcess: false, cancelCallback: null };
		            onLoginResponse(error, response, client, callback);
		        });
		}
		
		function loginWithLoginControl(login, provider, useSingleSignOn, parameters, callback) {
		    /// <summary>
		    /// Log a user into a Mobile Services application using a platform specific
		    /// login control that will present the user with the given provider's login web page.
		    /// </summary>
		    /// <param name="login" type="MobileServiceLogin">
		    /// The login instance that holds the context used with the login process.
		    /// </param>
		    /// <param name="provider" type="String">
		    /// Name of the authentication provider to use; one of 'facebook', 'twitter', 'google', or 'microsoftaccount'.
		    /// </param>
		    /// <param name="useSingleSignOn" type="Boolean">
		    /// Optional, indicates if single sign-on should be used.  Single sign-on requires that the
		    /// application's Package SID be registered with the Microsoft Azure Mobile Service, but it
		    /// provides a better experience as HTTP cookies are supported so that users do not have to
		    /// login in everytime the application is launched. Is false be default.
		    /// </param>
		    /// <param name="parameters" type="Object">
		    /// Any additional provider specific query string parameters.
		    /// </param>
		    /// <param name="callback" type="Function"  mayBeNull="true">
		    /// The callback to execute when the login completes: callback(error, user).
		    /// </param>
		
		    var client = login.getMobileServiceClient();
		    var startUri = _.url.combinePathSegments(
		        client.alternateLoginHost || client.applicationUrl,
		        client.loginUriPrefix || loginUrl,
		        provider);
		
		    var endUri = null,
		        queryParams = {},
		        key;
		
		    // Make a copy of the query parameters and set the session mode to token.
		    for (key in parameters) {
		        queryParams[key] = parameters[key];
		    }
		    queryParams[sessionModeKey] = sessionModeValueToken;
		
		    var queryString = _.url.getQueryString(queryParams);
		    startUri = _.url.combinePathAndQuery(startUri, queryString);
		
		    // If not single sign-on, then we need to construct a non-null end uri.
		    if (!useSingleSignOn) {
		        endUri = _.url.combinePathSegments(
		            client.alternateLoginHost || client.applicationUrl,
		            client.loginUriPrefix || loginUrl,
		            loginDone);
		    }
		
		    login._loginState = { inProcess: true, cancelCallback: null }; // cancelCallback gets set below
		
		    // Call the platform to launch the login control, capturing any
		    // 'cancel' callback that it returns
		    var platformResult = Platform.login(
		        startUri,
		        endUri,
		        function (error, mobileServiceToken) {
		            login._loginState = { inProcess: false, cancelCallback: null };
		            onLoginComplete(error, mobileServiceToken, client, callback);
		        });
		
		    if (login._loginState.inProcess && platformResult && platformResult.cancelCallback) {
		        login._loginState.cancelCallback = platformResult.cancelCallback;
		    }
		}
		
	};

	$__modules__.Push = function (exports) {
		// ----------------------------------------------------------------------------
		// Copyright (c) Microsoft Corporation. All rights reserved.
		// ----------------------------------------------------------------------------
		var Validate = require('Validate'),
		    Platform = require('Platform'),
		    _ = require('Extensions');
		
		exports.Push = Push;
		
		function Push(client, installationId) {
		    this.client = client;
		    this.installationId = installationId;
		}
		
		/// <summary>
		/// Register a push channel with the Mobile Apps backend to start receiving notifications.
		/// </summary>
		/// <param name="platform" type="string">
		/// The device platform being used - wns, gcm or apns.
		/// </param>
		/// <param name="pushChannel" type="string">
		/// The push channel identifier or URI.
		/// </param>
		/// <param name="templates" type="string">
		/// An object containing template definitions. Template objects should contain body, headers and tags properties.
		/// </param>
		/// <param name="secondaryTiles" type="string">
		/// An object containing template definitions to be used with secondary tiles when using WNS.
		/// </param>
		Push.prototype.register = Platform.async(
		    function (platform, pushChannel, templates, secondaryTiles, callback) {
		        Validate.isString(platform, 'platform');
		        Validate.notNullOrEmpty(platform, 'platform');
		
		        // in order to support the older callback style completion, we need to check optional parameters
		        if (_.isNull(callback) && (typeof templates === 'function')) {
		            callback = templates;
		            templates = null;
		        }
		
		        if (_.isNull(callback) && (typeof secondaryTiles === 'function')) {
		            callback = secondaryTiles;
		            secondaryTiles = null;
		        }
		
		        var requestContent = {
		            installationId: this.installationId,
		            pushChannel: pushChannel,
		            platform: platform,
		            templates: stringifyTemplateBodies(templates),
		            secondaryTiles: stringifyTemplateBodies(secondaryTiles)
		        };
		
		        executeRequest(this.client, 'PUT', pushChannel, requestContent, this.installationId, callback);
		    }
		);
		
		/// <summary>
		/// Unregister a push channel with the Mobile Apps backend to stop receiving notifications.
		/// </summary>
		/// <param name="pushChannel" type="string">
		/// The push channel identifier or URI.
		/// </param>
		Push.prototype.unregister = Platform.async(
		    function (pushChannel, callback) {
		        executeRequest(this.client, 'DELETE', pushChannel, null, this.installationId, callback);
		    }
		);
		
		function executeRequest(client, method, pushChannel, content, installationId, callback) {
		    Validate.isString(pushChannel, 'pushChannel');
		    Validate.notNullOrEmpty(pushChannel, 'pushChannel');
		
		    var headers = { 'If-Modified-Since': 'Mon, 27 Mar 1972 00:00:00 GMT' };
		    headers[WindowsAzure.MobileServiceClient._zumoApiVersionHeaderName] = WindowsAzure.MobileServiceClient._zumoApiVersion;
		
		    client._request(
		        method,
		        'push/installations/' + encodeURIComponent(installationId),
		        content,
		        null,
		        headers,
		        callback
		    );
		}
		
		function stringifyTemplateBodies(templates) {
		    var result = {};
		    for (var templateName in templates) {
		        if (templates.hasOwnProperty(templateName)) {
		            // clone the template so we are not modifying the original
		            var template = _.extend({}, templates[templateName]);
		            if (typeof template.body !== 'string') {
		                template.body = JSON.stringify(template.body);
		            }
		            result[templateName] = template;
		        }
		    }
		    return result;
		}
	};

	$__modules__.Validate = function (exports) {
		// ----------------------------------------------------------------------------
		// Copyright (c) Microsoft Corporation. All rights reserved.
		// ----------------------------------------------------------------------------
		
		/// <reference path="C:\Program Files (x86)\Microsoft SDKs\Windows\v8.0\ExtensionSDKs\Microsoft.WinJS.1.0\1.0\DesignTime\CommonConfiguration\Neutral\Microsoft.WinJS.1.0\js\base.js" />
		/// <reference path="C:\Program Files (x86)\Microsoft SDKs\Windows\v8.0\ExtensionSDKs\Microsoft.WinJS.1.0\1.0\DesignTime\CommonConfiguration\Neutral\Microsoft.WinJS.1.0\js\ui.js" />
		/// <reference path="..\Generated\Zumo.DevIntellisense.js" />
		
		var _ = require('Extensions');
		var Platform = require('Platform');
		
		exports.notNull = function (value, name) {
		    /// <summary>
		    /// Ensure the value is not null (or undefined).
		    /// </summary>
		    /// <param name="value" mayBeNull="true">The value to check.</param>
		    /// <param name="name" mayBeNull="true" optional="true">
		    /// Optional name of the value to throw.
		    /// </param>
		
		    if (_.isNull(value)) {
		        throw _.format(Platform.getResourceString("Validate_NotNullError"), name || 'Value');
		    }
		};
		
		exports.notNullOrEmpty = function (value, name) {
		    /// <summary>
		    /// Ensure the value is not null, undefined, or empty.
		    /// </summary>
		    /// <param name="value" mayBeNull="true">The value to check.</param>
		    /// <param name="name" mayBeNull="true" optional="true" type="String">
		    /// Optional name of the value to throw.
		    /// </param>
		
		    if (_.isNullOrEmpty(value)) {
		        throw _.format(Platform.getResourceString("Validate_NotNullOrEmptyError"), name || 'Value');
		    }
		};
		
		exports.notNullOrZero = function (value, name) {
		    /// <summary>
		    /// Ensure the value is not null, undefined, zero, or empty.
		    /// </summary>
		    /// <param name="value" mayBeNull="true">The value to check.</param>
		    /// <param name="name" mayBeNull="true" optional="true" type="String">
		    /// Optional name of the value to throw.
		    /// </param>
		
		    if (_.isNullOrZero(value)) {
		        throw _.format(Platform.getResourceString("Validate_NotNullOrEmptyError"), name || 'Value');
		    }
		};
		
		exports.isValidId = function (value, name) {
		    /// <summary>
		    /// Ensure the value is a valid id for mobile services.
		    /// </summary>
		    /// <param name="value" mayBeNull="true">The value to check.</param>
		    /// <param name="name" mayBeNull="true" optional="true" type="String">
		    /// Optional name of the value to throw.
		    /// </param>
		
		    if (!_.isValidId(value)) {
		        throw _.format(Platform.getResourceString("Validate_InvalidId"), name || 'id');
		    }
		};
		
		exports.isDate = function (value, name) {
		    /// <summary>
		    /// Ensure the value is a date.
		    /// </summary>
		    /// <param name="value" mayBeNull="true">The value to check.</param>
		    /// <param name="name" mayBeNull="true" optional="true" type="String">
		    /// Optional name of the value to throw.
		    /// </param>
		    
		    exports.notNull(value, name);    
		    if (!_.isDate(value)) {
		        throw _.format(
		            Platform.getResourceString("Validate_TypeCheckError"),
		            name || 'Value',
		            'Date',
		            typeof value);
		    }
		};
		
		exports.isNumber = function (value, name) {
		    /// <summary>
		    /// Ensure the value is a number.
		    /// </summary>
		    /// <param name="value" mayBeNull="true">The value to check.</param>
		    /// <param name="name" mayBeNull="true" optional="true" type="String">
		    /// Optional name of the value to throw.
		    /// </param>
		
		    exports.notNull(value, name);
		
		    if (!_.isNumber(value)) {
		        throw _.format(
		            Platform.getResourceString("Validate_TypeCheckError"),
		            name || 'Value',
		            'Number',
		            typeof value);
		    }
		};
		
		exports.isValidParametersObject = function (value, name) {
		    /// <summary>
		    /// Ensure the Object instance of user-defined parameters is valid.
		    /// </summary>
		    /// <param name="value">The parameters to check.</param>
		    /// <param name="name" mayBeNull="true" optional="true" type="String">
		    /// Optional name of the value to throw.
		    /// </param>
		
		    exports.notNull(value, name);
		    exports.isObject(value, name);
		
		    for (var parameter in value) {
		        if (parameter.indexOf('$') === 0) {
		            throw _.format(
		                Platform.getResourceString("Validate_InvalidUserParameter"),
		                name,
		                parameter);
		        }
		    }
		};
		
		exports.isInteger = function (value, name) {
		    /// <summary>
		    /// Ensure the value is an integer.
		    /// </summary>
		    /// <param name="value" mayBeNull="true">The value to check.</param>
		    /// <param name="name" mayBeNull="true" optional="true" type="String">
		    /// Optional name of the value to throw.
		    /// </param>
		
		    exports.notNull(value, name);
		    exports.isNumber(value, name);
		
		    if (parseInt(value, 10) !== parseFloat(value)) {
		        throw _.format(
		            Platform.getResourceString("Validate_TypeCheckError"),
		            name || 'Value',
		            'number',
		            typeof value);
		    }
		};
		
		exports.isString = function (value, name) {
		    /// <summary>
		    /// Ensure the value is a string.
		    /// </summary>
		    /// <param name="value" mayBeNull="true">The value to check.</param>
		    /// <param name="name" mayBeNull="true" optional="true" type="String">
		    /// Optional name of the value to throw.
		    /// </param>
		
		    if (!_.isString(value)) {
		        throw _.format(
		            Platform.getResourceString("Validate_TypeCheckError"),
		            name || 'Value',
		            'string',
		            typeof value);
		    }
		};
		
		exports.isObject = function (value, name) {
		    /// <summary>
		    /// Ensure the value is an Object.
		    /// </summary>
		    /// <param name="value" mayBeNull="true">The value to check.</param>
		    /// <param name="name" mayBeNull="true" optional="true" type="String">
		    /// Optional name of the value to throw.
		    /// </param>
		
		    if (!_.isObject(value)) {
		        throw _.format(
		            Platform.getResourceString("Validate_TypeCheckError"),
		            name || 'Value',
		            'object',
		            typeof value);
		    }
		};
		
		exports.isArray = function (value, name) {
		    /// <summary>
		    /// Ensure the value is an Array.
		    /// </summary>
		    /// <param name="value" mayBeNull="true">The value to check.</param>
		    /// <param name="name" mayBeNull="true" optional="true" type="String">
		    /// Optional name of the value to throw.
		    /// </param>
		
		    if (!Array.isArray(value)) {
		        throw _.format(
		            Platform.getResourceString("Validate_TypeCheckError"),
		            name || 'Value',
		            'array',
		            typeof value);
		    }
		};
		
		exports.length = function (value, length, name) {
		    /// <summary>
		    /// Ensure the value is of a given length.
		    /// </summary>
		    /// <param name="value" type="String">
		    /// The value to check.
		    /// </param>
		    /// <param name="length" type="Number" integer="true">
		    /// The desired length of the value.
		    /// </param>
		    /// <param name="name" mayBeNull="true" optional="true" type="String">
		    /// Optional name of the value to throw.
		    /// </param>
		
		    exports.notNull(value, name);
		    exports.isInteger(length, 'length');
		
		    if (value.length !== length) {
		        throw _.format(
		            Platform.getResourceString("Validate_LengthUnexpected"),
		            name || 'Value',
		            length,
		            value.length);
		    }
		};
		
	};

	$__modules__.JavaScript = function (exports) {
		// Generated by CoffeeScript 1.7.1
		
		/*
		 * ----------------------------------------------------------------------------
		 * Copyright (c) Microsoft Corporation. All rights reserved.
		 * ----------------------------------------------------------------------------
		 */
		
		(function() {
		  var JS, JavaScript, JavaScriptToQueryVisitor, PartialEvaluator, esprima;
		
		  esprima = require('esprima');
		
		  JS = require('./JavaScriptNodes');
		
		  PartialEvaluator = require('./PartialEvaluator').PartialEvaluator;
		
		  JavaScriptToQueryVisitor = require('./JavaScriptToQueryVisitor').JavaScriptToQueryVisitor;
		
		
		  /*
		   * Define operations on JavaScript
		   */
		
		  exports.JavaScript = JavaScript = (function() {
		    function JavaScript() {}
		
		
		    /*
		     * Static method to transform a constraint specified as a function into
		     * a QueryExpression tree.
		     */
		
		    JavaScript.transformConstraint = function(func, env) {
		
		      /*
		       * Parse the body of the function into a JavaScriptExpression tree
		       * (into a context that also contains its source and manually reified
		       * environment)
		       */
		      var context, translator;
		      context = JavaScript.getExpression(func, env);
		
		      /*
		       * Evaluate any independent subexpressions and turn them into
		       * literals.
		       */
		      context.expression = PartialEvaluator.evaluate(context);
		
		      /*
		       * Convert the JavaScriptExpression tree into a QueryExpression tree
		       */
		      translator = new JavaScriptToQueryVisitor(context);
		      return translator.visit(context.expression);
		    };
		
		
		    /*
		     * Static method to walk a projection specified as a function and
		     * determine which fields it uses.
		     */
		
		    JavaScript.getProjectedFields = function(func) {
		
		      /*
		       * This currently returns an empty array which indicates all fields.
		       * At some point we'll need to go through and walk the expression
		       * tree for func and see exactly which fields it uses.  This is
		       * complicated by the fact that we support arbitrary expressions and
		       * could for example pass 'this' to a nested lambda which means we
		       * can't just check for MemberExpressions (though in that case we'll
		       * probably just default to [] rather than trying to do alias
		       * analysis across function calls, etc.)
		       */
		      return [];
		    };
		
		
		    /*
		     * Turn a function and its explicitly passed environment into an
		     * expression tree
		     */
		
		    JavaScript.getExpression = function(func, env) {
		
		      /*
		       * An anonymous function isn't considered a valid program, so we'll wrap
		       * it in an assignment statement to keep the parser happy
		       */
		      var environment, expr, i, name, names, program, source, _i, _len, _ref, _ref1, _ref10, _ref11, _ref12, _ref13, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7, _ref8, _ref9;
		      source = "var _$$_stmt_$$_ = " + func + ";";
		
		      /*
		       * Use esprima to parse the source of the function body (and have it
		       * return source locations in character ranges )
		       */
		      program = esprima.parse(source, {
		        range: true
		      });
		
		      /*
		       * Get the expression from return statement of the function body to use
		       * as our lambda expression
		       */
		      expr = (program != null ? program.type : void 0) === 'Program' && (program != null ? (_ref = program.body) != null ? _ref.length : void 0 : void 0) === 1 && ((_ref1 = program.body[0]) != null ? _ref1.type : void 0) === 'VariableDeclaration' && ((_ref2 = program.body[0]) != null ? (_ref3 = _ref2.declarations) != null ? _ref3.length : void 0 : void 0) === 1 && ((_ref4 = program.body[0].declarations[0]) != null ? _ref4.type : void 0) === 'VariableDeclarator' && ((_ref5 = program.body[0].declarations[0]) != null ? (_ref6 = _ref5.init) != null ? _ref6.type : void 0 : void 0) === 'FunctionExpression' && ((_ref7 = program.body[0].declarations[0].init) != null ? (_ref8 = _ref7.body) != null ? _ref8.type : void 0 : void 0) === 'BlockStatement' && ((_ref9 = program.body[0].declarations[0].init.body) != null ? (_ref10 = _ref9.body) != null ? _ref10.length : void 0 : void 0) === 1 && ((_ref11 = program.body[0].declarations[0].init.body.body[0]) != null ? _ref11.type : void 0) === 'ReturnStatement' && ((_ref12 = program.body[0].declarations[0].init.body.body[0]) != null ? _ref12.argument : void 0);
		      if (!expr) {
		        throw "Expected a predicate with a single return statement, not " + func;
		      }
		
		      /*
		       * Create the environment mqpping parameters to values
		       */
		      names = (_ref13 = program.body[0].declarations[0].init.params) != null ? _ref13.map(function(p) {
		        return p.name;
		      }) : void 0;
		      if (names.length > env.length) {
		        throw "Expected value(s) for parameter(s) " + names.slice(env.length);
		      } else if (env.length > names.length) {
		        throw "Expected parameter(s) for value(s) " + env.slice(names.length);
		      }
		      environment = {};
		      for (i = _i = 0, _len = names.length; _i < _len; i = ++_i) {
		        name = names[i];
		        environment[name] = env[i];
		      }
		      return {
		
		        /*
		         * Return the environment context
		         */
		        source: source,
		        expression: expr,
		        environment: environment
		      };
		    };
		
		    return JavaScript;
		
		  })();
		
		}).call(this);
		
	};

	$__modules__.JavaScriptNodes = function (exports) {
		// Generated by CoffeeScript 1.7.1
		
		/*
		 * ----------------------------------------------------------------------------
		 * Copyright (c) Microsoft Corporation. All rights reserved.
		 * ----------------------------------------------------------------------------
		 */
		
		
		/*
		 * Define the Esprima node structure for JavaScript parse trees.  This is mostly
		 * identical to the SpiderMonkey API defined at
		 * https://developer.mozilla.org/en/SpiderMonkey/Parser_API without any of the
		 * SpiderMonkey specifics and a few simplifications made by Esprima (i.e. it
		 * doesn't have separate objects for operator types, etc.).
		 *
		 * It's important to note that the Esprima parse tree will return object literals
		 * and not instances of these types.  They're provided primarily for reference
		 * and for easily constructing new subtrees during transformations by visitors.
		 */
		
		
		/* Get the base Node and Visitor classes. */
		
		(function() {
		  var ArrayExpression, ArrayPattern, AssignmentExpression, BinaryExpression, BlockStatement, BreakStatement, CallExpression, CatchClause, ConditionalExpression, ContinueStatement, DebuggerStatement, Declaration, DoWhileStatement, EmptyStatement, Expression, ExpressionStatement, ForInStatement, ForStatement, Function, FunctionDeclaration, FunctionExpression, Identifier, IfStatement, JavaScriptNode, JavaScriptVisitor, LabeledStatement, Literal, LogicalExpression, MemberExpression, NewExpression, Node, ObjectExpression, ObjectPattern, Pattern, Program, ReturnStatement, SequenceExpression, Statement, SwitchCase, SwitchStatement, ThisExpression, ThrowStatement, TryStatement, UnaryExpression, UpdateExpression, VariableDeclaration, VariableDeclarator, Visitor, WhileStatement, WithStatement, _ref,
		    __hasProp = {}.hasOwnProperty,
		    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };
		
		  _ref = require('./Node'), Node = _ref.Node, Visitor = _ref.Visitor;
		
		
		  /*
		   * Base node for all JavaScript nodes.
		   */
		
		  exports.JavaScriptNode = JavaScriptNode = (function(_super) {
		    __extends(JavaScriptNode, _super);
		
		    function JavaScriptNode() {
		      JavaScriptNode.__super__.constructor.call(this);
		    }
		
		    return JavaScriptNode;
		
		  })(Node);
		
		
		  /*
		   * Base visitor for all JavaScript nodes.
		   */
		
		  exports.JavaScriptVisitor = JavaScriptVisitor = (function(_super) {
		    __extends(JavaScriptVisitor, _super);
		
		    function JavaScriptVisitor() {
		      JavaScriptVisitor.__super__.constructor.call(this);
		    }
		
		    JavaScriptVisitor.prototype.JavaScriptNode = function(node) {
		      return node;
		    };
		
		    return JavaScriptVisitor;
		
		  })(Visitor);
		
		
		  /*
		   * A complete program source tree.
		   */
		
		  exports.Program = Program = (function(_super) {
		    __extends(Program, _super);
		
		
		    /*
		     * @elements: [Statement]
		     */
		
		    function Program(elements) {
		      this.elements = elements;
		      Program.__super__.constructor.call(this);
		    }
		
		    return Program;
		
		  })(JavaScriptNode);
		
		  JavaScriptVisitor.prototype.Program = function(node) {
		    node = this.JavaScriptNode(node);
		    node.elements = this.visit(node.elements);
		    return node;
		  };
		
		
		  /*
		   * A function declaration or expression. The body of the function is a  block
		   * statement.
		   */
		
		  exports.Function = Function = (function(_super) {
		    __extends(Function, _super);
		
		
		    /*
		     * @id: Identifier | null
		     * @params: [Pattern]
		     * @body: BlockStatement
		     */
		
		    function Function(id, params, body) {
		      this.id = id;
		      this.params = params;
		      this.body = body;
		      Function.__super__.constructor.call(this);
		    }
		
		    return Function;
		
		  })(JavaScriptNode);
		
		  JavaScriptVisitor.prototype.Function = function(node) {
		    node = this.JavaScriptNode(node);
		    node.id = this.visit(node.id);
		    node.params = this.visit(node.params);
		    node.body = this.visit(node.body);
		    return node;
		  };
		
		
		  /*
		   * Any statement.
		   */
		
		  exports.Statement = Statement = (function(_super) {
		    __extends(Statement, _super);
		
		    function Statement() {
		      Statement.__super__.constructor.call(this);
		    }
		
		    return Statement;
		
		  })(JavaScriptNode);
		
		  JavaScriptVisitor.prototype.Statement = function(node) {
		    node = this.JavaScriptNode(node);
		    return node;
		  };
		
		
		  /*
		   * An empty statement, i.e., a solitary semicolon.
		   */
		
		  exports.EmptyStatement = EmptyStatement = (function(_super) {
		    __extends(EmptyStatement, _super);
		
		    function EmptyStatement() {
		      EmptyStatement.__super__.constructor.call(this);
		    }
		
		    return EmptyStatement;
		
		  })(JavaScriptNode);
		
		  JavaScriptVisitor.prototype.EmptyStatement = function(node) {
		    node = this.JavaScriptNode(node);
		    return node;
		  };
		
		
		  /*
		   * A block statement, i.e., a sequence of statements surrounded by braces.
		   */
		
		  exports.BlockStatement = BlockStatement = (function(_super) {
		    __extends(BlockStatement, _super);
		
		
		    /*
		     * @body: [Statement]
		     */
		
		    function BlockStatement(body) {
		      this.body = body;
		      BlockStatement.__super__.constructor.call(this);
		    }
		
		    return BlockStatement;
		
		  })(Statement);
		
		  JavaScriptVisitor.prototype.BlockStatement = function(node) {
		    node = this.Statement(node);
		    node.body = this.visit(node.body);
		    return node;
		  };
		
		
		  /*
		   * An expression statement, i.e., a statement consisting of a single expression.
		   */
		
		  exports.ExpressionStatement = ExpressionStatement = (function(_super) {
		    __extends(ExpressionStatement, _super);
		
		    function ExpressionStatement() {
		      ExpressionStatement.__super__.constructor.call(this);
		    }
		
		    return ExpressionStatement;
		
		  })(Statement);
		
		  JavaScriptVisitor.prototype.ExpressionStatement = function(node) {
		    node = this.Statement(node);
		    return node;
		  };
		
		
		  /*
		   * An if statement.
		   */
		
		  exports.IfStatement = IfStatement = (function(_super) {
		    __extends(IfStatement, _super);
		
		
		    /*
		     * @test: Expression
		     * @consequent: Statement
		     * @alternate: Statement | null
		     */
		
		    function IfStatement(test, consequent, alternate) {
		      this.test = test;
		      this.consequent = consequent;
		      this.alternate = alternate;
		      IfStatement.__super__.constructor.call(this);
		    }
		
		    return IfStatement;
		
		  })(Statement);
		
		  JavaScriptVisitor.prototype.IfStatement = function(node) {
		    node = this.Statement(node);
		    node.test = this.visit(node.test);
		    node.consequent = this.visit(node.consequent);
		    node.alternate = this.visit(node.alternate);
		    return node;
		  };
		
		
		  /*
		   * A labeled statement, i.e., a statement prefixed by a break/continue label.
		   */
		
		  exports.LabeledStatement = LabeledStatement = (function(_super) {
		    __extends(LabeledStatement, _super);
		
		
		    /*
		     * @label: Identifier
		     * @body: Statement
		     */
		
		    function LabeledStatement(label, body) {
		      this.label = label;
		      this.body = body;
		      LabeledStatement.__super__.constructor.call(this);
		    }
		
		    return LabeledStatement;
		
		  })(Statement);
		
		  JavaScriptVisitor.prototype.LabeledStatement = function(node) {
		    node = this.Statement(node);
		    node.label = this.visit(node.label);
		    node.body = this.visit(node.body);
		    return node;
		  };
		
		
		  /*
		   * A break statement.
		   */
		
		  exports.BreakStatement = BreakStatement = (function(_super) {
		    __extends(BreakStatement, _super);
		
		
		    /*
		     * @label: Identifier | null
		     */
		
		    function BreakStatement(label) {
		      this.label = label;
		      BreakStatement.__super__.constructor.call(this);
		    }
		
		    return BreakStatement;
		
		  })(Statement);
		
		  JavaScriptVisitor.prototype.BreakStatement = function(node) {
		    node = this.Statement(node);
		    node.label = this.visit(node.label);
		    return node;
		  };
		
		
		  /*
		  A continue statement.
		   */
		
		  exports.ContinueStatement = ContinueStatement = (function(_super) {
		    __extends(ContinueStatement, _super);
		
		
		    /*
		    @label: Identifier | null
		     */
		
		    function ContinueStatement(label) {
		      this.label = label;
		      ContinueStatement.__super__.constructor.call(this);
		    }
		
		    return ContinueStatement;
		
		  })(Statement);
		
		  JavaScriptVisitor.prototype.ContinueStatement = function(node) {
		    node = this.Statement(node);
		    node.label = this.visit(node.label);
		    return node;
		  };
		
		
		  /*
		   * A with statement.
		   */
		
		  exports.WithStatement = WithStatement = (function(_super) {
		    __extends(WithStatement, _super);
		
		
		    /*
		     * @object: Expression
		     * @body: Statement
		     */
		
		    function WithStatement(object, body) {
		      this.object = object;
		      this.body = body;
		      WithStatement.__super__.constructor.call(this);
		    }
		
		    return WithStatement;
		
		  })(Statement);
		
		  JavaScriptVisitor.prototype.WithStatement = function(node) {
		    node = this.Statement(node);
		    node.object = this.visit(node.object);
		    node.body = this.visit(node.body);
		    return node;
		  };
		
		
		  /*
		   * A switch statement.
		   */
		
		  exports.SwitchStatement = SwitchStatement = (function(_super) {
		    __extends(SwitchStatement, _super);
		
		
		    /*
		     * @discriminant: Expression
		     * @cases: [SwitchCase]
		     */
		
		    function SwitchStatement(discriminant, cases) {
		      this.discriminant = discriminant;
		      this.cases = cases;
		      SwitchStatement.__super__.constructor.call(this);
		    }
		
		    return SwitchStatement;
		
		  })(Statement);
		
		  JavaScriptVisitor.prototype.SwitchStatement = function(node) {
		    node = this.Statement(node);
		    node.discriminant = this.visit(node.discriminant);
		    node.cases = this.visit(node.cases);
		    return node;
		  };
		
		
		  /*
		   * A return statement.
		   */
		
		  exports.ReturnStatement = ReturnStatement = (function(_super) {
		    __extends(ReturnStatement, _super);
		
		
		    /*
		     * @argument: Expression | null
		     */
		
		    function ReturnStatement(argument) {
		      this.argument = argument;
		      ReturnStatement.__super__.constructor.call(this);
		    }
		
		    return ReturnStatement;
		
		  })(Statement);
		
		  JavaScriptVisitor.prototype.ReturnStatement = function(node) {
		    node = this.Statement(node);
		    node.argument = this.visit(node.argument);
		    return node;
		  };
		
		
		  /*
		   * A throw statement.
		   */
		
		  exports.ThrowStatement = ThrowStatement = (function(_super) {
		    __extends(ThrowStatement, _super);
		
		
		    /*
		     * @argument: Expression
		     */
		
		    function ThrowStatement(argument) {
		      this.argument = argument;
		      ThrowStatement.__super__.constructor.call(this);
		    }
		
		    return ThrowStatement;
		
		  })(Statement);
		
		  JavaScriptVisitor.prototype.ThrowStatement = function(node) {
		    node = this.Statement(node);
		    node.argument = this.visit(node.argument);
		    return node;
		  };
		
		
		  /*
		   * A try statement.
		   */
		
		  exports.TryStatement = TryStatement = (function(_super) {
		    __extends(TryStatement, _super);
		
		
		    /*
		     * @block: BlockStatement
		     * @handlers: [CatchClause]
		     * @finalizer: BlockStatement | null
		     */
		
		    function TryStatement(block, handlers, finalizer) {
		      this.block = block;
		      this.handlers = handlers;
		      this.finalizer = finalizer;
		      TryStatement.__super__.constructor.call(this);
		    }
		
		    return TryStatement;
		
		  })(Statement);
		
		  JavaScriptVisitor.prototype.TryStatement = function(node) {
		    node = this.Statement(node);
		    node.block = this.visit(node.block);
		    node.handlers = this.visit(node.handlers);
		    node.finalizer = this.visit(node.finalizer);
		    return node;
		  };
		
		
		  /*
		   * A while statement.
		   */
		
		  exports.WhileStatement = WhileStatement = (function(_super) {
		    __extends(WhileStatement, _super);
		
		
		    /*
		     * @test: Expression
		     * @body: Statement
		     */
		
		    function WhileStatement(test, body) {
		      this.test = test;
		      this.body = body;
		      WhileStatement.__super__.constructor.call(this);
		    }
		
		    return WhileStatement;
		
		  })(Statement);
		
		  JavaScriptVisitor.prototype.WhileStatement = function(node) {
		    node = this.Statement(node);
		    node.test = this.visit(node.test);
		    node.body = this.visit(node.body);
		    return node;
		  };
		
		
		  /*
		   * A do/while statement.
		   */
		
		  exports.DoWhileStatement = DoWhileStatement = (function(_super) {
		    __extends(DoWhileStatement, _super);
		
		
		    /*
		     * @body: Statement
		     * @test: Expression
		     */
		
		    function DoWhileStatement(body, test) {
		      this.body = body;
		      this.test = test;
		      DoWhileStatement.__super__.constructor.call(this);
		    }
		
		    return DoWhileStatement;
		
		  })(Statement);
		
		  JavaScriptVisitor.prototype.DoWhileStatement = function(node) {
		    node = this.Statement(node);
		    node.body = this.visit(node.body);
		    node.test = this.visit(node.test);
		    return node;
		  };
		
		
		  /*
		   * A for statement.
		   */
		
		  exports.ForStatement = ForStatement = (function(_super) {
		    __extends(ForStatement, _super);
		
		
		    /*
		     * @init: VariableDeclaration | Expression | null
		     * @test: Expression | null
		     * @update: Expression | null
		     * @body: Statement
		     */
		
		    function ForStatement(init, test, update, body) {
		      this.init = init;
		      this.test = test;
		      this.update = update;
		      this.body = body;
		      ForStatement.__super__.constructor.call(this);
		    }
		
		    return ForStatement;
		
		  })(Statement);
		
		  JavaScriptVisitor.prototype.ForStatement = function(node) {
		    node = this.Statement(node);
		    node.init = this.visit(node.init);
		    node.test = this.visit(node.test);
		    node.update = this.visit(node.update);
		    node.body = this.visit(node.body);
		    return node;
		  };
		
		
		  /*
		   * A for/in statement, or, if each is true, a for each/in statement.
		   */
		
		  exports.ForInStatement = ForInStatement = (function(_super) {
		    __extends(ForInStatement, _super);
		
		
		    /*
		     * @left: VariableDeclaration |  Expression
		     * @right: Expression
		     * @body: Statement
		     */
		
		    function ForInStatement(left, right, body) {
		      this.left = left;
		      this.right = right;
		      this.body = body;
		      ForInStatement.__super__.constructor.call(this);
		    }
		
		    return ForInStatement;
		
		  })(Statement);
		
		  JavaScriptVisitor.prototype.ForInStatement = function(node) {
		    node = this.Statement(node);
		    node.left = this.visit(node.left);
		    node.right = this.visit(node.right);
		    node.body = this.visit(node.body);
		    return node;
		  };
		
		
		  /*
		   * A debugger statement.
		   */
		
		  exports.DebuggerStatement = DebuggerStatement = (function(_super) {
		    __extends(DebuggerStatement, _super);
		
		    function DebuggerStatement() {
		      DebuggerStatement.__super__.constructor.call(this);
		    }
		
		    return DebuggerStatement;
		
		  })(Statement);
		
		  JavaScriptVisitor.prototype.DebuggerStatement = function(node) {
		    node = this.Statement(node);
		    return node;
		  };
		
		
		  /*
		   * Any declaration node. Note that declarations are considered statements; this
		   * is because declarations can appear in any statement context in the language.
		   */
		
		  exports.Declaration = Declaration = (function(_super) {
		    __extends(Declaration, _super);
		
		    function Declaration() {
		      Declaration.__super__.constructor.call(this);
		    }
		
		    return Declaration;
		
		  })(Statement);
		
		  JavaScriptVisitor.prototype.Declaration = function(node) {
		    node = this.Statement(node);
		    return node;
		  };
		
		
		  /*
		   * A function declaration.  Note: The id field cannot be null.
		   */
		
		  exports.FunctionDeclaration = FunctionDeclaration = (function(_super) {
		    __extends(FunctionDeclaration, _super);
		
		
		    /*
		     * @id: Identifier
		     * @params: [ Pattern ]
		     * @body: BlockStatement | Expression
		     */
		
		    function FunctionDeclaration(id, params, body) {
		      this.id = id;
		      this.params = params;
		      this.body = body;
		      FunctionDeclaration.__super__.constructor.call(this);
		    }
		
		    return FunctionDeclaration;
		
		  })(Declaration);
		
		  JavaScriptVisitor.prototype.FunctionDeclaration = function(node) {
		    node = this.Declaration(node);
		    node.id = this.visit(node.id);
		    node.params = this.visit(node.params);
		    node.body = this.visit(node.body);
		    return node;
		  };
		
		
		  /*
		   * A variable declaration, via one of var, let, or const.
		   */
		
		  exports.VariableDeclaration = VariableDeclaration = (function(_super) {
		    __extends(VariableDeclaration, _super);
		
		
		    /*
		     * @declarations: [ VariableDeclarator ]
		     * @kind: "var"
		     */
		
		    function VariableDeclaration(declarations, kind) {
		      this.declarations = declarations;
		      this.kind = kind;
		      VariableDeclaration.__super__.constructor.call(this);
		    }
		
		    return VariableDeclaration;
		
		  })(Declaration);
		
		  JavaScriptVisitor.prototype.VariableDeclaration = function(node) {
		    node = this.Declaration(node);
		    node.declarations = this.visit(node.declarations);
		    return node;
		  };
		
		
		  /*
		   * A variable declarator.  Note: The id field cannot be null.
		   */
		
		  exports.VariableDeclarator = VariableDeclarator = (function(_super) {
		    __extends(VariableDeclarator, _super);
		
		
		    /*
		     * @id: Pattern
		     * @init: Expression | null
		     */
		
		    function VariableDeclarator(id, init) {
		      this.id = id;
		      this.init = init;
		      VariableDeclarator.__super__.constructor.call(this);
		    }
		
		    return VariableDeclarator;
		
		  })(JavaScriptNode);
		
		  JavaScriptVisitor.prototype.VariableDeclarator = function(node) {
		    node = this.JavaScriptNode(node);
		    node.id = this.visit(node.id);
		    node.init = this.visit(node.init);
		    return node;
		  };
		
		
		  /*
		   * Any expression node. Since the left-hand side of an assignment may be any
		   * expression in general, an expression can also be a pattern.
		   */
		
		  exports.Expression = Expression = (function(_super) {
		    __extends(Expression, _super);
		
		    function Expression() {
		      return Expression.__super__.constructor.apply(this, arguments);
		    }
		
		    Expression.prototype.constuctor = function() {
		      return Expression.__super__.constuctor.call(this);
		    };
		
		    return Expression;
		
		  })(JavaScriptNode);
		
		  JavaScriptVisitor.prototype.Expression = function(node) {
		    node = this.JavaScriptNode(node);
		    return node;
		  };
		
		
		  /*
		   * A this expression.
		   */
		
		  exports.ThisExpression = ThisExpression = (function(_super) {
		    __extends(ThisExpression, _super);
		
		    function ThisExpression() {
		      ThisExpression.__super__.constructor.call(this);
		    }
		
		    return ThisExpression;
		
		  })(Expression);
		
		  JavaScriptVisitor.prototype.ThisExpression = function(node) {
		    node = this.Expression(node);
		    return node;
		  };
		
		
		  /*
		   * An array expression.
		   */
		
		  exports.ArrayExpression = ArrayExpression = (function(_super) {
		    __extends(ArrayExpression, _super);
		
		
		    /*
		     * @elements: [ Expression | null ]
		     */
		
		    function ArrayExpression(elements) {
		      this.elements = elements;
		      ArrayExpression.__super__.constructor.call(this);
		    }
		
		    return ArrayExpression;
		
		  })(Expression);
		
		  JavaScriptVisitor.prototype.ArrayExpression = function(node) {
		    node = this.Expression(node);
		    node.elements = this.visit(node.elements);
		    return node;
		  };
		
		
		  /*
		   * An object expression. A literal property in an object expression can have
		   * either a string or number as its value.  Ordinary property initializers have a
		   * kind value "init"; getters and setters have the kind values "get" and "set",
		   * respectively.
		   */
		
		  exports.ObjectExpression = ObjectExpression = (function(_super) {
		    __extends(ObjectExpression, _super);
		
		
		    /*
		     * @properties: [ { key: Literal | Identifier,
		     *                 value: Expression,
		     *                 kind: "init" | "get" | "set" } ];
		     */
		
		    function ObjectExpression(properties) {
		      this.properties = properties;
		      ObjectExpression.__super__.constructor.call(this);
		    }
		
		    return ObjectExpression;
		
		  })(Expression);
		
		  JavaScriptVisitor.prototype.ObjectExpression = function(node) {
		    var setter, _i, _len, _ref1;
		    node = this.Expression(node);
		    _ref1 = node.properties;
		    for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
		      setter = _ref1[_i];
		      setter.key = this.visit(setter.key);
		      setter.value = this.visit(setter.value);
		    }
		    return node;
		  };
		
		
		  /*
		   * A function expression.
		   */
		
		  exports.FunctionExpression = FunctionExpression = (function(_super) {
		    __extends(FunctionExpression, _super);
		
		
		    /*
		     * @id: Identifier | null
		     * @params: [ Pattern ]
		     * @body: BlockStatement | Expression
		     */
		
		    function FunctionExpression(id, params, body) {
		      this.id = id;
		      this.params = params;
		      this.body = body;
		      FunctionExpression.__super__.constructor.call(this);
		    }
		
		    return FunctionExpression;
		
		  })(Expression);
		
		  JavaScriptVisitor.prototype.FunctionExpression = function(node) {
		    node = this.Expression(node);
		    node.id = this.visit(node.id);
		    node.params = this.visit(node.params);
		    node.body = this.visit(node.body);
		    return node;
		  };
		
		
		  /*
		   * A sequence expression, i.e., a comma-separated sequence of expressions.
		   */
		
		  exports.SequenceExpression = SequenceExpression = (function(_super) {
		    __extends(SequenceExpression, _super);
		
		
		    /*
		     * @expressions: [ Expression ]
		     */
		
		    function SequenceExpression(expressions) {
		      this.expressions = expressions;
		      SequenceExpression.__super__.constructor.call(this);
		    }
		
		    return SequenceExpression;
		
		  })(Expression);
		
		  JavaScriptVisitor.prototype.SequenceExpression = function(node) {
		    node = this.Expression(node);
		    node.expressions = this.visit(node.expressions);
		    return node;
		  };
		
		
		  /*
		   * A unary operator expression.
		   */
		
		  exports.UnaryExpression = UnaryExpression = (function(_super) {
		    __extends(UnaryExpression, _super);
		
		
		    /*
		     * @operator: "-" | "+" | "!" | "~" | "typeof" | "void" | "delete"
		     * @prefix: boolean
		     * @argument: Expression
		     */
		
		    function UnaryExpression(operator, prefix, argument) {
		      this.operator = operator;
		      this.prefix = prefix;
		      this.argument = argument;
		      UnaryExpression.__super__.constructor.call(this);
		    }
		
		    return UnaryExpression;
		
		  })(Expression);
		
		  JavaScriptVisitor.prototype.UnaryExpression = function(node) {
		    node = this.Expression(node);
		    node.argument = this.visit(node.argument);
		    return node;
		  };
		
		
		  /*
		   * A binary operator expression.
		   */
		
		  exports.BinaryExpression = BinaryExpression = (function(_super) {
		    __extends(BinaryExpression, _super);
		
		
		    /*
		     * @operator: "==" | "!=" | "===" | "!==" | "<" | "<=" | ">" | ">="
		     *     | "<<" | ">>" | ">>>" | "+" | "-" | "*" | "/" | "%"
		     *     | "|" | "&" | "^" | "in" | "instanceof" | ".."
		     * @left: Expression
		     * @right: Expression
		     */
		
		    function BinaryExpression(operator, left, right) {
		      this.operator = operator;
		      this.left = left;
		      this.right = right;
		      BinaryExpression.__super__.constructor.call(this);
		    }
		
		    return BinaryExpression;
		
		  })(Expression);
		
		  JavaScriptVisitor.prototype.BinaryExpression = function(node) {
		    node = this.Expression(node);
		    node.left = this.visit(node.left);
		    node.right = this.visit(node.right);
		    return node;
		  };
		
		
		  /*
		   * An assignment operator expression.
		   */
		
		  exports.AssignmentExpression = AssignmentExpression = (function(_super) {
		    __extends(AssignmentExpression, _super);
		
		
		    /*
		     * @operator: "=" | "+=" | "-=" | "*=" | "/=" | "%="
		     *     | "<<=" | ">>=" | ">>>=" | "|=" | "^=" | "&=";
		     * @left: Expression
		     * @right: Expression
		     */
		
		    function AssignmentExpression(operator, left, right) {
		      this.operator = operator;
		      this.left = left;
		      this.right = right;
		      AssignmentExpression.__super__.constructor.call(this);
		    }
		
		    return AssignmentExpression;
		
		  })(Expression);
		
		  JavaScriptVisitor.prototype.AssignmentExpression = function(node) {
		    node = this.Expression(node);
		    node.left = this.visit(node.left);
		    node.right = this.visit(node.right);
		    return node;
		  };
		
		
		  /*
		   * An update (increment or decrement) operator expression.
		   */
		
		  exports.UpdateExpression = UpdateExpression = (function(_super) {
		    __extends(UpdateExpression, _super);
		
		
		    /*
		     * @operator: "++" | "--"
		     * @argument: Expression
		     * @prefix: boolean
		     */
		
		    function UpdateExpression(operator, argument, prefix) {
		      this.operator = operator;
		      this.argument = argument;
		      this.prefix = prefix;
		      UpdateExpression.__super__.constructor.call(this);
		    }
		
		    return UpdateExpression;
		
		  })(Expression);
		
		  JavaScriptVisitor.prototype.UpdateExpression = function(node) {
		    node = this.Expression(node);
		    node.argument = this.visit(node.argument);
		    return node;
		  };
		
		
		  /*
		   * A logical operator expression.
		   */
		
		  exports.LogicalExpression = LogicalExpression = (function(_super) {
		    __extends(LogicalExpression, _super);
		
		
		    /*
		     * @operator: "||" | "&&"
		     * @left: Expression
		     * @right: Expression
		     */
		
		    function LogicalExpression(operator, left, right) {
		      this.operator = operator;
		      this.left = left;
		      this.right = right;
		      LogicalExpression.__super__.constructor.call(this);
		    }
		
		    return LogicalExpression;
		
		  })(Expression);
		
		  JavaScriptVisitor.prototype.LogicalExpression = function(node) {
		    node = this.Expression(node);
		    node.left = this.visit(node.left);
		    node.right = this.visit(node.right);
		    return node;
		  };
		
		
		  /*
		   * A conditional expression, i.e., a ternary ?/: expression.
		   */
		
		  exports.ConditionalExpression = ConditionalExpression = (function(_super) {
		    __extends(ConditionalExpression, _super);
		
		
		    /*
		     * @test: Expression
		     * @alternate: Expression
		     * @consequent: Expression
		     */
		
		    function ConditionalExpression(test, alternate, consequent) {
		      this.test = test;
		      this.alternate = alternate;
		      this.consequent = consequent;
		      ConditionalExpression.__super__.constructor.call(this);
		    }
		
		    return ConditionalExpression;
		
		  })(Expression);
		
		  JavaScriptVisitor.prototype.ConditionalExpression = function(node) {
		    node = this.Expression(node);
		    node.test = this.visit(node.test);
		    node.alternate = this.visit(node.alternate);
		    node.consequent = this.visit(node.consequent);
		    return node;
		  };
		
		
		  /*
		   * A new expression.
		   */
		
		  exports.NewExpression = NewExpression = (function(_super) {
		    __extends(NewExpression, _super);
		
		
		    /*
		     * @callee: Expression
		     * @arguments: [ Expression ] | null
		     */
		
		    function NewExpression(callee, _arguments) {
		      this.callee = callee;
		      this["arguments"] = _arguments;
		      NewExpression.__super__.constructor.call(this);
		    }
		
		    return NewExpression;
		
		  })(Expression);
		
		  JavaScriptVisitor.prototype.NewExpression = function(node) {
		    node = this.Expression(node);
		    node.callee = this.visit(node.callee);
		    node["arguments"] = this.visit(node["arguments"]);
		    return node;
		  };
		
		
		  /*
		   * A function or method call expression.
		   */
		
		  exports.CallExpression = CallExpression = (function(_super) {
		    __extends(CallExpression, _super);
		
		
		    /*
		     * @callee: Expression
		     * @arguments: [ Expression ]
		     */
		
		    function CallExpression(callee, _arguments) {
		      this.callee = callee;
		      this["arguments"] = _arguments;
		      CallExpression.__super__.constructor.call(this);
		    }
		
		    return CallExpression;
		
		  })(Expression);
		
		  JavaScriptVisitor.prototype.CallExpression = function(node) {
		    node = this.Expression(node);
		    node.callee = this.visit(node.callee);
		    node["arguments"] = this.visit(node["arguments"]);
		    return node;
		  };
		
		
		  /*
		   * A member expression. If computed === true, the node corresponds to a computed
		   * e1[e2] expression and property is an Expression. If computed === false, the
		   * node corresponds to a static e1.x expression and property is an Identifier.
		   */
		
		  exports.MemberExpression = MemberExpression = (function(_super) {
		    __extends(MemberExpression, _super);
		
		
		    /*
		     * @object: Expression
		     * @property: Identifier | Expression
		     * @computed : boolean
		     */
		
		    function MemberExpression(object, property, computed) {
		      this.object = object;
		      this.property = property;
		      this.computed = computed;
		      MemberExpression.__super__.constructor.call(this);
		    }
		
		    return MemberExpression;
		
		  })(Expression);
		
		  JavaScriptVisitor.prototype.MemberExpression = function(node) {
		    node = this.Expression(node);
		    node.object = this.visit(node.object);
		    node.property = this.visit(node.property);
		    return node;
		  };
		
		
		  /*
		   * JavaScript 1.7 introduced destructuring assignment and binding forms.  All
		   * binding forms (such as function parameters, variable declarations, and catch
		   * block headers), accept array and object destructuring patterns in addition to
		   * plain identifiers. The left-hand sides of assignment expressions can be
		   * arbitrary expressions, but in the case where the expression is an object or
		   * array literal, it is interpreted by SpiderMonkey as a destructuring pattern.
		   *
		   * Since the left-hand side of an assignment can in general be any expression, in
		   * an assignment context, a pattern can be any expression. In binding positions
		   * (such as function parameters, variable declarations, and catch headers),
		   * patterns can only be identifiers in the base case, not arbitrary expressions.
		   */
		
		  exports.Pattern = Pattern = (function(_super) {
		    __extends(Pattern, _super);
		
		    function Pattern() {
		      Pattern.__super__.constructor.call(this);
		    }
		
		    return Pattern;
		
		  })(JavaScriptNode);
		
		  JavaScriptVisitor.prototype.Pattern = function(node) {
		    node = this.JavaScriptNode(node);
		    return node;
		  };
		
		
		  /*
		   * An object-destructuring pattern. A literal property in an object pattern can
		   * have either a string or number as its value.
		   */
		
		  exports.ObjectPattern = ObjectPattern = (function(_super) {
		    __extends(ObjectPattern, _super);
		
		
		    /*
		     * @properties: [ { key: Literal | Identifier, value: Pattern } ]
		     */
		
		    function ObjectPattern(properties) {
		      this.properties = properties;
		      ObjectPattern.__super__.constructor.call(this);
		    }
		
		    return ObjectPattern;
		
		  })(Pattern);
		
		  JavaScriptVisitor.prototype.ObjectPattern = function(node) {
		    var setter, _i, _len, _ref1;
		    node = this.Pattern(node);
		    _ref1 = node.properties;
		    for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
		      setter = _ref1[_i];
		      setter.key = this.visit(setter.key);
		      setter.value = this.visit(setter.value);
		    }
		    return node;
		  };
		
		
		  /*
		   * An array-destructuring pattern.
		   */
		
		  exports.ArrayPattern = ArrayPattern = (function(_super) {
		    __extends(ArrayPattern, _super);
		
		
		    /*
		     * @elements: [ Pattern | null ]
		     */
		
		    function ArrayPattern(elements) {
		      this.elements = elements;
		      ArrayPattern.__super__.constructor.call(this);
		    }
		
		    return ArrayPattern;
		
		  })(Pattern);
		
		  JavaScriptVisitor.prototype.ArrayPattern = function(node) {
		    node = this.Pattern(node);
		    node.elements = this.visit(node.elements);
		    return node;
		  };
		
		
		  /*
		   * A case (if test is an Expression) or default (if test === null) clause in the
		   * body of a switch statement.
		   */
		
		  exports.SwitchCase = SwitchCase = (function(_super) {
		    __extends(SwitchCase, _super);
		
		
		    /*
		     * @test: Expression | null
		     * @consequent: [ Statement ]
		     */
		
		    function SwitchCase(test, consequent) {
		      this.test = test;
		      this.consequent = consequent;
		      SwitchCase.__super__.constructor.call(this);
		    }
		
		    return SwitchCase;
		
		  })(JavaScriptNode);
		
		  JavaScriptVisitor.prototype.SwitchCase = function(node) {
		    node = this.JavaScriptNode(node);
		    node.test = this.visit(node.test);
		    node.consequent = this.visit(node.consequent);
		    return node;
		  };
		
		
		  /*
		   * A catch clause following a try block. The optional guard property corresponds
		   * to the optional expression guard on the bound variable.
		   */
		
		  exports.CatchClause = CatchClause = (function(_super) {
		    __extends(CatchClause, _super);
		
		
		    /*
		     * @param: Pattern
		     * @body: BlockStatement
		     */
		
		    function CatchClause(param, body) {
		      this.param = param;
		      this.body = body;
		      CatchClause.__super__.constructor.call(this);
		    }
		
		    return CatchClause;
		
		  })(JavaScriptNode);
		
		  JavaScriptVisitor.prototype.CatchClause = function(node) {
		    node = this.JavaScriptNode(node);
		    node.param = this.visit(node.param);
		    node.body = this.visit(node.body);
		    return node;
		  };
		
		
		  /*
		   * An identifier. Note that an identifier may be an expression or a destructuring
		   * pattern.
		   */
		
		  exports.Identifier = Identifier = (function(_super) {
		    __extends(Identifier, _super);
		
		
		    /*
		     * @name: string
		     */
		
		    function Identifier(name) {
		      this.name = name;
		      Identifier.__super__.constructor.call(this);
		    }
		
		    return Identifier;
		
		  })(JavaScriptNode);
		
		  JavaScriptVisitor.prototype.Identifier = function(node) {
		    node = this.JavaScriptNode(node);
		    return node;
		  };
		
		
		  /*
		   * A literal token. Note that a literal can be an expression.
		   */
		
		  exports.Literal = Literal = (function(_super) {
		    __extends(Literal, _super);
		
		
		    /*
		     * @value: string | boolean | null | number | RegExp
		     */
		
		    function Literal(value) {
		      this.value = value;
		      Literal.__super__.constructor.call(this);
		    }
		
		    return Literal;
		
		  })(Expression);
		
		  JavaScriptVisitor.prototype.Literal = function(node) {
		    node = this.Expression(node);
		    return node;
		  };
		
		}).call(this);
		
	};

	$__modules__.JavaScriptToQueryVisitor = function (exports) {
		// Generated by CoffeeScript 1.7.1
		
		/*
		 * ----------------------------------------------------------------------------
		 * Copyright (c) Microsoft Corporation. All rights reserved.
		 * ----------------------------------------------------------------------------
		 */
		
		(function() {
		  var JS, JavaScriptToQueryVisitor, Q, _,
		    __hasProp = {}.hasOwnProperty,
		    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };
		
		  _ = require('./Utilities');
		
		  JS = require('./JavaScriptNodes');
		
		  Q = require('./QueryNodes');
		
		
		  /*
		   * Walk the JavaScriptExpression tree and convert its nodes into QueryExpression
		   * trees
		   */
		
		  exports.JavaScriptToQueryVisitor = JavaScriptToQueryVisitor = (function(_super) {
		    __extends(JavaScriptToQueryVisitor, _super);
		
		    function JavaScriptToQueryVisitor(context) {
		      this.context = context;
		    }
		
		
		    /* Get the source code for a given node */
		
		    JavaScriptToQueryVisitor.prototype.getSource = function(node) {
		      var _ref, _ref1;
		      return this.context.source.slice(node != null ? (_ref = node.range) != null ? _ref[0] : void 0 : void 0, +((node != null ? (_ref1 = node.range) != null ? _ref1[1] : void 0 : void 0) - 1) + 1 || 9e9);
		    };
		
		
		    /* Throw an exception for an invalid node. */
		
		    JavaScriptToQueryVisitor.prototype.invalid = function(node) {
		      throw "The expression '" + (this.getSource(node)) + "'' is not supported.";
		    };
		
		
		    /* Unary expressions just map operators */
		
		    JavaScriptToQueryVisitor.prototype.translateUnary = function(node, mapping) {
		      var op, value;
		      op = mapping[node.operator];
		      if (op) {
		        value = this.visit(node.argument);
		        return new Q.UnaryExpression(op, value);
		      } else {
		        return null;
		      }
		    };
		
		
		    /* Binary expressions just map operators */
		
		    JavaScriptToQueryVisitor.prototype.translateBinary = function(node, mapping) {
		      var left, op, right;
		      op = mapping[node.operator];
		      if (op) {
		        left = this.visit(node.left);
		        right = this.visit(node.right);
		        return new Q.BinaryExpression(op, left, right);
		      } else {
		        return null;
		      }
		    };
		
		
		    /*
		     * The base visit method will throw exceptions for any nodes that remain
		     * untransformed (which allows us to only bother defining meaningful
		     * translations)
		     */
		
		    JavaScriptToQueryVisitor.prototype.visit = function(node) {
		      var visited;
		      visited = JavaScriptToQueryVisitor.__super__.visit.call(this, node);
		      if (node === visited) {
		        this.invalid(node);
		      }
		      return visited;
		    };
		
		    JavaScriptToQueryVisitor.prototype.MemberExpression = function(node) {
		      var expr;
		      expr = (function() {
		        var _ref, _ref1, _ref2, _ref3;
		        if ((node != null ? (_ref = node.object) != null ? _ref.type : void 0 : void 0) === 'ThisExpression' && (node != null ? (_ref1 = node.property) != null ? _ref1.type : void 0 : void 0) === 'Identifier') {
		
		          /* Simple member access */
		          return new Q.MemberExpression(node.property.name);
		        } else if ((node != null ? (_ref2 = node.object) != null ? _ref2.type : void 0 : void 0) === 'MemberExpression' && ((_ref3 = node.object.object) != null ? _ref3.type : void 0) === 'ThisExpression' && node.property.type === 'Identifier') {
		
		          /* Methods that look like properties */
		          if (node.property.name === 'length') {
		            return new Q.InvocationExpression(Q.Methods.Length, new Q.MemberExpression(node.object.property.name));
		          }
		        }
		      })();
		      return expr != null ? expr : JavaScriptToQueryVisitor.__super__.MemberExpression.call(this, node);
		    };
		
		    JavaScriptToQueryVisitor.prototype.Literal = function(node) {
		      return new Q.ConstantExpression(node.value);
		    };
		
		    JavaScriptToQueryVisitor.prototype.UnaryExpression = function(node) {
		      var mapping, _ref;
		      if (node.operator === '+') {
		
		        /* Ignore the + in '+52' */
		        return this.visit(node.argument);
		      } else {
		        mapping = {
		          '!': Q.UnaryOperators.Not,
		          '-': Q.UnaryOperators.Negate
		        };
		        return (_ref = this.translateUnary(node, mapping)) != null ? _ref : JavaScriptToQueryVisitor.__super__.UnaryExpression.call(this, node);
		      }
		    };
		
		    JavaScriptToQueryVisitor.prototype.UpdateExpression = function(node) {
		      var mapping, _ref;
		      mapping = {
		        '++': Q.UnaryOperators.Increment,
		        '--': Q.UnaryOperators.Decrement
		      };
		      return (_ref = this.translateUnary(node, mapping)) != null ? _ref : JavaScriptToQueryVisitor.__super__.UpdateExpression.call(this, node);
		    };
		
		    JavaScriptToQueryVisitor.prototype.LogicalExpression = function(node) {
		      var mapping, _ref;
		      mapping = {
		        '&&': Q.BinaryOperators.And,
		        '||': Q.BinaryOperators.Or
		      };
		      return (_ref = this.translateBinary(node, mapping)) != null ? _ref : JavaScriptToQueryVisitor.__super__.LogicalExpression.call(this, node);
		    };
		
		    JavaScriptToQueryVisitor.prototype.BinaryExpression = function(node) {
		      var k, left, mapping, properties, v, value, _ref;
		      mapping = {
		        '+': Q.BinaryOperators.Add,
		        '-': Q.BinaryOperators.Subtract,
		        '*': Q.BinaryOperators.Multiply,
		        '/': Q.BinaryOperators.Divide,
		        '%': Q.BinaryOperators.Modulo,
		        '>': Q.BinaryOperators.GreaterThan,
		        '>=': Q.BinaryOperators.GreaterThanOrEqual,
		        '<': Q.BinaryOperators.LessThan,
		        '<=': Q.BinaryOperators.LessThanOrEqual,
		        '!=': Q.BinaryOperators.NotEqual,
		        '!==': Q.BinaryOperators.NotEqual,
		        '==': Q.BinaryOperators.Equal,
		        '===': Q.BinaryOperators.Equal
		      };
		      return (function() {
		        var _ref1, _ref2;
		        if ((_ref = this.translateBinary(node, mapping)) != null) {
		          return _ref;
		        } else if (node.operator === 'in' && ((_ref1 = node.right) != null ? _ref1.type : void 0) === 'Literal' && _.isArray((_ref2 = node.right) != null ? _ref2.value : void 0)) {
		
		          /*
		           * Transform the 'varName in [x, y, z]' operator into a series of
		           * comparisons like varName == x || varName == y || varName == z.
		           */
		          if (node.right.value.length > 0) {
		            left = this.visit(node.left);
		            return Q.QueryExpression.groupClauses(Q.BinaryOperators.Or, (function() {
		              var _i, _len, _ref3, _results;
		              _ref3 = node.right.value;
		              _results = [];
		              for (_i = 0, _len = _ref3.length; _i < _len; _i++) {
		                value = _ref3[_i];
		
		                /*
		                 * If we've got an array of objects who each have
		                 * a single property, we'll use the value of that
		                 * property.  Otherwise we'll throw an exception.
		                 */
		                if (_.isObject(value)) {
		                  properties = (function() {
		                    var _results1;
		                    _results1 = [];
		                    for (k in value) {
		                      v = value[k];
		                      _results1.push(v);
		                    }
		                    return _results1;
		                  })();
		                  if ((properties != null ? properties.length : void 0) !== 1) {
		                    throw "in operator requires comparison objects with a single field, not " + value + " (" + (JSON.stringify(value)) + "), for expression '" + (this.getSource(node)) + "'";
		                  }
		                  value = properties[0];
		                }
		                _results.push(new Q.BinaryExpression(Q.BinaryOperators.Equal, left, new Q.ConstantExpression(value)));
		              }
		              return _results;
		            }).call(this));
		          } else {
		
		            /*
		             * If the array of values is empty, change the query to
		             * true == false since it can't be satisfied.
		             */
		            return new Q.BinaryExpression(Q.BinaryOperators.Equal, new Q.ConstantExpression(true), new Q.ConstantExpression(false));
		          }
		        } else {
		          return JavaScriptToQueryVisitor.__super__.BinaryExpression.call(this, node);
		        }
		      }).call(this);
		    };
		
		    JavaScriptToQueryVisitor.prototype.CallExpression = function(node) {
		      var expr, func, getSingleArg, getTwoArgs, member, method, _ref;
		      getSingleArg = (function(_this) {
		        return function(name) {
		          var _ref;
		          if (((_ref = node["arguments"]) != null ? _ref.length : void 0) !== 1) {
		            throw "Function " + name + " expects one argument in expression '" + (_this.getSource(node)) + "'";
		          }
		          return _this.visit(node["arguments"][0]);
		        };
		      })(this);
		      getTwoArgs = (function(_this) {
		        return function(member, name) {
		          var _ref;
		          if (((_ref = node["arguments"]) != null ? _ref.length : void 0) !== 2) {
		            throw "Function " + name + " expects two arguments in expression '" + (_this.getSource(node)) + "'";
		          }
		          return [member, _this.visit(node["arguments"][0]), _this.visit(node["arguments"][1])];
		        };
		      })(this);
		
		      /*
		       * Translate known method calls that aren't attached to an instance.
		       * Note that we can compare against the actual method because the
		       * partial evaluator will have converted it into a literal for us.
		       */
		      func = node != null ? (_ref = node.callee) != null ? _ref.value : void 0 : void 0;
		      expr = (function() {
		        var _ref1, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7;
		        if (func === Math.floor) {
		          return new Q.InvocationExpression(Q.Methods.Floor, [getSingleArg('floor')]);
		        } else if (func === Math.ceil) {
		          return new Q.InvocationExpression(Q.Methods.Ceiling, [getSingleArg('ceil')]);
		        } else if (func === Math.round) {
		          return new Q.InvocationExpression(Q.Methods.Round, [getSingleArg('round')]);
		        } else {
		
		          /*
		           * Translate methods dangling off an instance
		           */
		          if (node.callee.type === 'MemberExpression' && ((_ref1 = node.callee.object) != null ? _ref1.__hasThisExp : void 0) === true) {
		            if ((node != null ? (_ref2 = node.callee) != null ? (_ref3 = _ref2.object) != null ? _ref3.type : void 0 : void 0 : void 0) === 'CallExpression') {
		              member = this.visit(node.callee.object);
		            } else {
		              member = new Q.MemberExpression((_ref4 = node.callee.object) != null ? (_ref5 = _ref4.property) != null ? _ref5.name : void 0 : void 0);
		            }
		            method = (_ref6 = node.callee) != null ? (_ref7 = _ref6.property) != null ? _ref7.name : void 0 : void 0;
		            if (method === 'toUpperCase') {
		              return new Q.InvocationExpression(Q.Methods.ToUpperCase, [member]);
		            } else if (method === 'toLowerCase') {
		              return new Q.InvocationExpression(Q.Methods.ToLowerCase, [member]);
		            } else if (method === 'trim') {
		              return new Q.InvocationExpression(Q.Methods.Trim, [member]);
		            } else if (method === 'indexOf') {
		              return new Q.InvocationExpression(Q.Methods.IndexOf, [member, getSingleArg('indexOf')]);
		            } else if (method === 'concat') {
		              return new Q.InvocationExpression(Q.Methods.Concat, [member, getSingleArg('concat')]);
		            } else if (method === 'substring' || method === 'substr') {
		              return new Q.InvocationExpression(Q.Methods.Substring, getTwoArgs(member, 'substring'));
		            } else if (method === 'replace') {
		              return new Q.InvocationExpression(Q.Methods.Replace, getTwoArgs(member, 'replace'));
		            } else if (method === 'getFullYear' || method === 'getUTCFullYear') {
		              return new Q.InvocationExpression(Q.Methods.Year, [member]);
		            } else if (method === 'getYear') {
		              return new Q.BinaryExpression(Q.BinaryOperators.Subtract, new Q.InvocationExpression(Q.Methods.Year, [member]), new Q.ConstantExpression(1900));
		            } else if (method === 'getMonth' || method === 'getUTCMonth') {
		
		              /* getMonth is 0 indexed in JavaScript */
		              return new Q.BinaryExpression(Q.BinaryOperators.Subtract, new Q.InvocationExpression(Q.Methods.Month, [member]), new Q.ConstantExpression(1));
		            } else if (method === 'getDate' || method === 'getUTCDate') {
		              return new Q.InvocationExpression(Q.Methods.Day, [member]);
		            }
		          }
		        }
		      }).call(this);
		      return expr != null ? expr : JavaScriptToQueryVisitor.__super__.CallExpression.call(this, node);
		    };
		
		    return JavaScriptToQueryVisitor;
		
		  })(JS.JavaScriptVisitor);
		
		}).call(this);
		
	};

	$__modules__.Node = function (exports) {
		// Generated by CoffeeScript 1.7.1
		
		/*
		 * ----------------------------------------------------------------------------
		 * Copyright (c) Microsoft Corporation. All rights reserved.
		 * ----------------------------------------------------------------------------
		 */
		
		(function() {
		  var Node, Visitor, _;
		
		  _ = require('./Utilities');
		
		
		  /*
		   * The base Node class for all expressions used for analysis and translation by
		   * visitors.  It's designed to interop with other modules that create expression
		   * trees using object literals with a type tag.
		   */
		
		  exports.Node = Node = (function() {
		
		    /*
		     * Type tag of the node that allows for eash dispatch in visitors.  This is
		     * automatically set in the constructor (so it's important to call super() in
		     * derived Node classes).
		     */
		    Node.prototype.type = 'Node';
		
		
		    /*
		     * Initializes a new instance of the Node class and sets its type tag.
		     */
		
		    function Node() {
		      this.type = _.functionName(this.constructor);
		    }
		
		    return Node;
		
		  })();
		
		
		  /*
		   * Base class for all visitors
		   */
		
		  exports.Visitor = Visitor = (function() {
		    function Visitor() {}
		
		
		    /*
		     * Visit a node.
		     */
		
		    Visitor.prototype.visit = function(node) {
		      var element, _i, _len, _results;
		      if (_.isArray(node)) {
		        _results = [];
		        for (_i = 0, _len = node.length; _i < _len; _i++) {
		          element = node[_i];
		          _results.push(this.visit(element));
		        }
		        return _results;
		      } else if (!(node != null ? node.type : void 0)) {
		        return node;
		      } else if (!_.isFunction(this[node.type])) {
		        throw "Unsupported expression " + (this.getSource(node));
		      } else {
		        return this[node.type](node);
		      }
		    };
		
		
		    /*
		     * Get the source code corresponding to a node.
		     */
		
		    Visitor.prototype.getSource = function(node) {
		
		      /* It is expected this will be overridden in derived visitors. */
		      return null;
		    };
		
		    return Visitor;
		
		  })();
		
		}).call(this);
		
	};

	$__modules__.ODataProvider = function (exports) {
		// Generated by CoffeeScript 1.7.1
		
		/*
		 * ----------------------------------------------------------------------------
		 * Copyright (c) Microsoft Corporation. All rights reserved.
		 * ----------------------------------------------------------------------------
		 */
		
		(function() {
		  var ODataFilterQueryVisitor, ODataProvider, Q, Query, _,
		    __hasProp = {}.hasOwnProperty,
		    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };
		
		  _ = require('./Utilities');
		
		  Q = require('./QueryNodes');
		
		  Query = require('./Query').Query;
		
		  exports.ODataProvider = ODataProvider = (function() {
		    function ODataProvider() {}
		
		
		    /*
		     * Convert a query into an OData URI.
		     */
		
		    ODataProvider.prototype.toQuery = function(query) {
		      var odata, s, url;
		      odata = this.toOData(query, true);
		      url = "/" + odata.table;
		      s = '?';
		      if (odata.filters) {
		        url += "" + s + "$filter=" + odata.filters;
		        s = '&';
		      }
		      if (odata.orderClauses) {
		        url += "" + s + "$orderby=" + odata.orderClauses;
		        s = '&';
		      }
		      if (odata.skip) {
		        url += "" + s + "$skip=" + odata.skip;
		        s = '&';
		      }
		      if (odata.take || odata.take === 0) {
		        url += "" + s + "$top=" + odata.take;
		        s = '&';
		      }
		      if (odata.selections) {
		        url += "" + s + "$select=" + odata.selections;
		        s = '&';
		      }
		      if (odata.includeTotalCount) {
		        url += "" + s + "$inlinecount=allpages";
		      }
		      return url;
		    };
		
		
		    /*
		     * Translate the query components into OData strings
		     */
		
		    ODataProvider.prototype.toOData = function(query, encodeForUri) {
		      var asc, components, name, odata, order, orderClauses, ordering, _ref, _ref1;
		      if (encodeForUri == null) {
		        encodeForUri = false;
		      }
		      components = (_ref = query != null ? query.getComponents() : void 0) != null ? _ref : {};
		      ordering = (function() {
		        var _ref1, _results;
		        _ref1 = components != null ? components.ordering : void 0;
		        _results = [];
		        for (name in _ref1) {
		          asc = _ref1[name];
		          _results.push(asc ? name : "" + name + " desc");
		        }
		        return _results;
		      })();
		      orderClauses = (function() {
		        var _i, _len, _ref1, _results;
		        _ref1 = components != null ? components.orderClauses : void 0;
		        _results = [];
		        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
		          order = _ref1[_i];
		          _results.push(order.ascending ? order.name : "" + order.name + " desc");
		        }
		        return _results;
		      })();
		      return odata = {
		        table: components != null ? components.table : void 0,
		        filters: ODataFilterQueryVisitor.convert(components.filters, encodeForUri),
		        ordering: ordering != null ? ordering.toString() : void 0,
		        orderClauses: orderClauses != null ? orderClauses.toString() : void 0,
		        skip: components != null ? components.skip : void 0,
		        take: components != null ? components.take : void 0,
		        selections: components != null ? (_ref1 = components.selections) != null ? _ref1.toString() : void 0 : void 0,
		        includeTotalCount: components != null ? components.includeTotalCount : void 0
		      };
		    };
		
		
		    /*
		     * Convert OData components into a query object
		     */
		
		    ODataProvider.prototype.fromOData = function(table, filters, ordering, skip, take, selections, includeTotalCount) {
		      var direction, field, item, query, _i, _j, _len, _len1, _ref, _ref1, _ref2, _ref3;
		      query = new Query(table);
		      if (filters) {
		        query.where(filters);
		      }
		      if (skip || skip === 0) {
		        query.skip(skip);
		      }
		      if (take || take === 0) {
		        query.take(take);
		      }
		      if (includeTotalCount) {
		        query.includeTotalCount();
		      }
		      _ref1 = (_ref = selections != null ? selections.split(',') : void 0) != null ? _ref : [];
		      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
		        field = _ref1[_i];
		        query.select(field.trim());
		      }
		      _ref2 = (function() {
		        var _k, _len1, _ref2, _ref3, _results;
		        _ref3 = (_ref2 = ordering != null ? ordering.split(',') : void 0) != null ? _ref2 : [];
		        _results = [];
		        for (_k = 0, _len1 = _ref3.length; _k < _len1; _k++) {
		          item = _ref3[_k];
		          _results.push(item.trim().split(' '));
		        }
		        return _results;
		      })();
		      for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
		        _ref3 = _ref2[_j], field = _ref3[0], direction = _ref3[1];
		        if ((direction != null ? direction.toUpperCase() : void 0) !== 'DESC') {
		          query.orderBy(field);
		        } else {
		          query.orderByDescending(field);
		        }
		      }
		      return query;
		    };
		
		    return ODataProvider;
		
		  })();
		
		
		  /*
		   * Visitor that converts query expression trees into OData filter statements.
		   */
		
		  ODataFilterQueryVisitor = (function(_super) {
		    __extends(ODataFilterQueryVisitor, _super);
		
		    function ODataFilterQueryVisitor(encodeForUri) {
		      this.encodeForUri = encodeForUri;
		    }
		
		    ODataFilterQueryVisitor.convert = function(filters, encodeForUri) {
		      var visitor, _ref;
		      visitor = new ODataFilterQueryVisitor(encodeForUri);
		      return (_ref = (filters ? visitor.visit(filters) : void 0)) != null ? _ref : null;
		    };
		
		    ODataFilterQueryVisitor.prototype.toOData = function(value) {
		      var text;
		      if ((_.isNumber(value)) || (_.isBoolean(value))) {
		        return value.toString();
		      } else if (_.isString(value)) {
		        value = value.replace(/'/g, "''");
		        if ((this.encodeForUri != null) && this.encodeForUri === true) {
		          value = encodeURIComponent(value);
		        }
		        return "'" + value + "'";
		      } else if (_.isDate(value)) {
		
		        /*
		         * Dates are expected in the format
		         *   "datetime'yyyy-mm-ddThh:mm[:ss[.fffffff]]'"
		         * which JSON.stringify gives us by default
		         */
		        text = JSON.stringify(value);
		        if (text.length > 2) {
		          text = text.slice(1, +(text.length - 2) + 1 || 9e9);
		        }
		        text = text.replace(/(T\d{2}:\d{2}:\d{2})Z$/, function(all, time) {
		          var msec;
		          msec = String(value.getMilliseconds() + 1000).substring(1);
		          return "" + time + "." + msec + "Z";
		        });
		        return "datetime'" + text + "'";
		      } else if (!value) {
		        return "null";
		      } else {
		        throw "Unsupported literal value " + value;
		      }
		    };
		
		    ODataFilterQueryVisitor.prototype.ConstantExpression = function(node) {
		      return this.toOData(node.value);
		    };
		
		    ODataFilterQueryVisitor.prototype.MemberExpression = function(node) {
		      return node.member;
		    };
		
		    ODataFilterQueryVisitor.prototype.UnaryExpression = function(node) {
		      if (node.operator === Q.UnaryOperators.Not) {
		        return "not " + (this.visit(node.operand));
		      } else if (node.operator === Q.UnaryOperators.Negate) {
		        return "(0 sub " + (this.visit(node.operand)) + ")";
		      } else {
		        throw "Unsupported operator " + node.operator;
		      }
		    };
		
		    ODataFilterQueryVisitor.prototype.BinaryExpression = function(node) {
		      var mapping, op;
		      mapping = {
		        And: 'and',
		        Or: 'or',
		        Add: 'add',
		        Subtract: 'sub',
		        Multiply: 'mul',
		        Divide: 'div',
		        Modulo: 'mod',
		        GreaterThan: 'gt',
		        GreaterThanOrEqual: 'ge',
		        LessThan: 'lt',
		        LessThanOrEqual: 'le',
		        NotEqual: 'ne',
		        Equal: 'eq'
		      };
		      op = mapping[node.operator];
		      if (op) {
		        return "(" + (this.visit(node.left)) + " " + op + " " + (this.visit(node.right)) + ")";
		      } else {
		        throw "Unsupported operator " + node.operator;
		      }
		    };
		
		    ODataFilterQueryVisitor.prototype.InvocationExpression = function(node) {
		      var mapping, method;
		      mapping = {
		        Length: 'length',
		        ToUpperCase: 'toupper',
		        ToLowerCase: 'tolower',
		        Trim: 'trim',
		        IndexOf: 'indexof',
		        Replace: 'replace',
		        Substring: 'substring',
		        Concat: 'concat',
		        Day: 'day',
		        Month: 'month',
		        Year: 'year',
		        Floor: 'floor',
		        Ceiling: 'ceiling',
		        Round: 'round'
		      };
		      method = mapping[node.method];
		      if (method) {
		        return "" + method + "(" + (this.visit(node.args)) + ")";
		      } else {
		        throw "Invocation of unsupported method " + node.method;
		      }
		    };
		
		    ODataFilterQueryVisitor.prototype.LiteralExpression = function(node) {
		      var ch, inString, literal, parenBalance, _i, _len, _ref;
		      literal = '';
		      parenBalance = 0;
		      inString = false;
		      _ref = node.queryString;
		      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
		        ch = _ref[_i];
		        if (parenBalance < 0) {
		          break;
		        } else if (inString) {
		          literal += ch;
		          inString = ch !== "'";
		        } else if (ch === '?') {
		          if ((!node.args) || (node.args.length <= 0)) {
		            throw "Too few arguments for " + node.queryString + ".";
		          }
		          literal += this.toOData(node.args.shift());
		        } else if (ch === "'") {
		          literal += ch;
		          inString = true;
		        } else if (ch === '(') {
		          parenBalance += 1;
		          literal += ch;
		        } else if (ch === ')') {
		          parenBalance -= 1;
		          literal += ch;
		        } else {
		          literal += ch;
		        }
		      }
		      if (node.args && node.args.length > 0) {
		        throw "Too many arguments for " + node.queryString;
		      }
		      if (parenBalance !== 0) {
		        throw "Unbalanced parentheses in " + node.queryString;
		      }
		      if (literal.trim().length > 0) {
		        return "(" + literal + ")";
		      } else {
		        return literal;
		      }
		    };
		
		    return ODataFilterQueryVisitor;
		
		  })(Q.QueryExpressionVisitor);
		
		}).call(this);
		
	};

	$__modules__.PartialEvaluator = function (exports) {
		// Generated by CoffeeScript 1.7.1
		
		/*
		 * ----------------------------------------------------------------------------
		 * Copyright (c) Microsoft Corporation. All rights reserved.
		 * ----------------------------------------------------------------------------
		 */
		
		(function() {
		  var IndependenceNominator, JS, PartialEvaluator, _,
		    __hasProp = {}.hasOwnProperty,
		    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };
		
		  _ = require('./Utilities');
		
		  JS = require('./JavaScriptNodes');
		
		
		  /*
		   * Partially evaluate a complex expression in the context of its environment.
		   * This allows us to support arbitrary JavaScript expressions even though we
		   * only explicitly transform a subset of expressions into QueryExpressions.
		   *
		   * For example, assuming we have an expression like (x) -> @id == x + 1 with an
		   * environment where x == 12, then the entire right hand side of the comparison
		   * is independent of any values computed by the query and could be replaced with
		   * the literal value 13.
		   */
		
		  exports.PartialEvaluator = PartialEvaluator = (function(_super) {
		    __extends(PartialEvaluator, _super);
		
		    function PartialEvaluator(context) {
		      this.context = context;
		    }
		
		    PartialEvaluator.prototype.visit = function(node) {
		      var key, params, source, thunk, value, values, _ref, _ref1, _ref2, _ref3;
		      if (!node.__independent || node.type === 'Literal' || (!node.type)) {
		
		        /*
		         * If the node isn't independent or it's already a literal, then
		         * just keep walking the tree
		         */
		        return PartialEvaluator.__super__.visit.call(this, node);
		      } else {
		
		        /*
		         * Otherwse we'll evaluate the node in the context of the
		         * environment by either looking up identifiers directly or
		         * evaluating whole sub expressions
		         */
		        if (node.type === 'Identifier' && this.context.environment[node.name]) {
		          return new JS.Literal(this.context.environment[node.name]);
		        } else {
		
		          /*
		           * Evaluate the source of the sub expression in the context
		           * of the environment
		           */
		          source = this.context.source.slice(node != null ? (_ref = node.range) != null ? _ref[0] : void 0 : void 0, +((node != null ? (_ref1 = node.range) != null ? _ref1[1] : void 0 : void 0) - 1) + 1 || 9e9);
		          params = (_ref2 = (function() {
		            var _ref3, _results;
		            _ref3 = this.context.environment;
		            _results = [];
		            for (key in _ref3) {
		              value = _ref3[key];
		              _results.push(key);
		            }
		            return _results;
		          }).call(this)) != null ? _ref2 : [];
		          values = (_ref3 = (function() {
		            var _ref4, _results;
		            _ref4 = this.context.environment;
		            _results = [];
		            for (key in _ref4) {
		              value = _ref4[key];
		              _results.push(JSON.stringify(value));
		            }
		            return _results;
		          }).call(this)) != null ? _ref3 : [];
		          thunk = "(function(" + params + ") { return " + source + "; })(" + values + ")";
		          value = eval(thunk);
		          return new JS.Literal(value);
		        }
		      }
		    };
		
		    PartialEvaluator.evaluate = function(context) {
		      var evaluator, nominator;
		      nominator = new IndependenceNominator(context);
		      nominator.visit(context.expression);
		      evaluator = new PartialEvaluator(context);
		      return evaluator.visit(context.expression);
		    };
		
		    return PartialEvaluator;
		
		  })(JS.JavaScriptVisitor);
		
		
		  /*
		   * Nominate independent nodes in an expression tree that don't depend on any
		   * server side values.
		   */
		
		  exports.IndependenceNominator = IndependenceNominator = (function(_super) {
		    __extends(IndependenceNominator, _super);
		
		    function IndependenceNominator(context) {
		      this.context = context;
		    }
		
		    IndependenceNominator.prototype.Literal = function(node) {
		      IndependenceNominator.__super__.Literal.call(this, node);
		      node.__independent = true;
		      node.__hasThisExp = false;
		      return node;
		    };
		
		    IndependenceNominator.prototype.ThisExpression = function(node) {
		      IndependenceNominator.__super__.ThisExpression.call(this, node);
		      node.__independent = false;
		      node.__hasThisExp = true;
		      return node;
		    };
		
		    IndependenceNominator.prototype.Identifier = function(node) {
		      IndependenceNominator.__super__.Identifier.call(this, node);
		      node.__independent = true;
		      node.__hasThisExp = false;
		      return node;
		    };
		
		    IndependenceNominator.prototype.MemberExpression = function(node) {
		      var _ref;
		      IndependenceNominator.__super__.MemberExpression.call(this, node);
		
		      /*
		       * Undo independence of identifiers when they're members of this.* or
		       * this.member.* (the latter allows for member functions)
		       */
		      node.__hasThisExp = (_ref = node.object) != null ? _ref.__hasThisExp : void 0;
		      if (node.__hasThisExp) {
		        node.__independent = false;
		        if (node != null) {
		          node.property.__independent = false;
		        }
		      }
		      return node;
		    };
		
		    IndependenceNominator.prototype.CallExpression = function(node) {
		      IndependenceNominator.__super__.CallExpression.call(this, node);
		      node.__hasThisExp = node.callee.__hasThisExp;
		      return node;
		    };
		
		    IndependenceNominator.prototype.ObjectExpression = function(node) {
		      var independence, setter, _i, _j, _len, _len1, _ref, _ref1;
		      IndependenceNominator.__super__.ObjectExpression.call(this, node);
		
		      /*
		       * Prevent literal key identifiers from being evaluated out of
		       * context
		       */
		      _ref = node.properties;
		      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
		        setter = _ref[_i];
		        setter.key.__independent = false;
		      }
		
		      /*
		       * An object literal is independent if all of its values are
		       * independent
		       */
		      independence = true;
		      _ref1 = node.properties;
		      for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
		        setter = _ref1[_j];
		        independence &= setter.value.__independent;
		      }
		      node.__independent = independence ? true : false;
		      return node;
		    };
		
		    IndependenceNominator.prototype.visit = function(node) {
		
		      /*
		       * Call the base visit method which will both visit all of our
		       * subexpressions and also call the couple of overrides above which
		       * handle the base independence cases
		       */
		      var independence, isIndependent, name, v, value, _i, _len;
		      IndependenceNominator.__super__.visit.call(this, node);
		
		      /*
		       * If the node's independence wasn't determined automatically by the
		       * base cases above, then it's independence is determined by checking
		       * all of its values and aggregating their independence
		       */
		      if (!(Object.prototype.hasOwnProperty.call(node, '__independent'))) {
		        independence = true;
		        isIndependent = function(node) {
		          var _ref;
		          if (_.isObject(node)) {
		            return (_ref = value.__independent) != null ? _ref : false;
		          } else {
		            return true;
		          }
		        };
		        for (name in node) {
		          value = node[name];
		          if (_.isArray(value)) {
		            for (_i = 0, _len = value.length; _i < _len; _i++) {
		              v = value[_i];
		              independence &= isIndependent(v);
		            }
		          } else if (_.isObject(value)) {
		            independence &= isIndependent(value);
		          }
		        }
		
		        /* &= will turn true/false into 1/0 so we'll turn it back */
		        node.__independent = independence ? true : false;
		      }
		      return node;
		    };
		
		    return IndependenceNominator;
		
		  })(JS.JavaScriptVisitor);
		
		}).call(this);
		
	};

	$__modules__.Query = function (exports) {
		// Generated by CoffeeScript 1.7.1
		
		/*
		 * ----------------------------------------------------------------------------
		 * Copyright (c) Microsoft Corporation. All rights reserved.
		 * ----------------------------------------------------------------------------
		 */
		
		
		/* Pull in references */
		
		(function() {
		  var JavaScript, ODataProvider, Q, Query, _,
		    __slice = [].slice;
		
		  _ = require('./Utilities');
		
		  Q = require('./QueryNodes');
		
		  JavaScript = require('./JavaScript').JavaScript;
		
		
		  /*
		   * Define a query that can be translated into a desired query language and
		   * executed remotely.
		   */
		
		  exports.Query = Query = (function() {
		    function Query(table, context) {
		      var _context, _filters, _includeTotalCount, _orderClauses, _ordering, _projection, _selections, _skip, _table, _take, _version;
		      if (!table || !(_.isString(table))) {
		        throw 'Expected the name of a table!';
		      }
		
		      /* Store the table name and any extra context */
		      _table = table;
		      _context = context;
		
		      /* Private Query component members */
		      _filters = null;
		      _projection = null;
		      _selections = [];
		      _ordering = {};
		      _orderClauses = [];
		      _skip = null;
		      _take = null;
		      _includeTotalCount = false;
		
		      /*
		       * Keep a version flag that's updated on each mutation so we can
		       * track whether changes have been made.  This is to enable caching
		       * of compiled queries without reevaluating unless necessary.
		       */
		      _version = 0;
		
		      /* Get the individual components of the query */
		      this.getComponents = function() {
		        return {
		          filters: _filters,
		          selections: _selections,
		          projection: _projection,
		          ordering: _ordering,
		          orderClauses: _orderClauses,
		          skip: _skip,
		          take: _take,
		          table: _table,
		          context: _context,
		          includeTotalCount: _includeTotalCount,
		          version: _version
		        };
		      };
		
		      /*
		       * Set the individual components of the query (this is primarily
		       * meant to be used for rehydrating a query).
		       */
		      this.setComponents = function(components) {
		        var ascending, name, property, _i, _len, _ref, _ref1, _ref10, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7, _ref8, _ref9;
		        _version++;
		        _filters = (_ref = components != null ? components.filters : void 0) != null ? _ref : null;
		        _selections = (_ref1 = components != null ? components.selections : void 0) != null ? _ref1 : [];
		        _projection = (_ref2 = components != null ? components.projection : void 0) != null ? _ref2 : null;
		        _skip = (_ref3 = components != null ? components.skip : void 0) != null ? _ref3 : null;
		        _take = (_ref4 = components != null ? components.take : void 0) != null ? _ref4 : null;
		        _includeTotalCount = (_ref5 = components != null ? components.includeTotalCount : void 0) != null ? _ref5 : false;
		        _table = (_ref6 = components != null ? components.table : void 0) != null ? _ref6 : null;
		        _context = (_ref7 = components != null ? components.context : void 0) != null ? _ref7 : null;
		        if (components != null ? components.orderClauses : void 0) {
		          _orderClauses = (_ref8 = components != null ? components.orderClauses : void 0) != null ? _ref8 : [];
		          _ordering = {};
		          for (_i = 0, _len = _orderClauses.length; _i < _len; _i++) {
		            _ref9 = _orderClauses[_i], name = _ref9.name, ascending = _ref9.ascending;
		            _ordering[name] = ascending;
		          }
		        } else {
		          _ordering = (_ref10 = components != null ? components.ordering : void 0) != null ? _ref10 : {};
		          _orderClauses = [];
		          for (property in _ordering) {
		            _orderClauses.push({
		              name: property,
		              ascending: !!_ordering[property]
		            });
		          }
		        }
		        return this;
		      };
		
		      /*
		       * Add a constraint to a query.  Constraints can take the form of
		       * a function with a single return statement, key/value pairs of
		       * equality comparisons, or provider-specific literal strings (note
		       * that not all providers support literals).
		       */
		      this.where = function() {
		        var args, constraint, expr, name, value;
		        constraint = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
		        _version++;
		
		        /*
		         * Translate the constraint from its high level form into a
		         * QueryExpression tree that can be manipulated by a query
		         * provider
		         */
		        expr = (function() {
		          if (_.isFunction(constraint)) {
		            return JavaScript.transformConstraint(constraint, args);
		          } else if (_.isObject(constraint)) {
		
		            /*
		             * Turn an object of key value pairs into a series of
		             * equality expressions that are and'ed together to form
		             * a single expression
		             */
		            return Q.QueryExpression.groupClauses(Q.BinaryOperators.And, (function() {
		              var _results;
		              _results = [];
		              for (name in constraint) {
		                value = constraint[name];
		                _results.push(expr = new Q.BinaryExpression(Q.BinaryOperators.Equal, new Q.MemberExpression(name), new Q.ConstantExpression(value)));
		              }
		              return _results;
		            })());
		          } else if (_.isString(constraint)) {
		
		            /*
		             * Store the literal query along with any arguments for
		             * providers that support basic string replacement (i.e.,
		             * something like where('name eq ?', 'Steve'))
		             */
		            return new Q.LiteralExpression(constraint, args);
		          } else {
		            throw "Expected a function, object, or string, not " + constraint;
		          }
		        })();
		
		        /* Merge the new filters with any existing filters */
		        _filters = Q.QueryExpression.groupClauses(Q.BinaryOperators.And, [_filters, expr]);
		        return this;
		      };
		
		      /*
		       * Project the query results.  A projection can either be defined as
		       * a set of fields that we'll pull back (instead of the entire row)
		       * or a function that will transform a row into a new type.  If a
		       * function is used, we'll analyze the function to pull back the
		       * minimal number of fields required.
		       */
		      this.select = function() {
		        var param, parameters, projectionOrParameter, _i, _len;
		        projectionOrParameter = arguments[0], parameters = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
		        _version++;
		        if (_.isString(projectionOrParameter)) {
		
		          /* Add all the literal string parameters */
		          _selections.push(projectionOrParameter);
		          for (_i = 0, _len = parameters.length; _i < _len; _i++) {
		            param = parameters[_i];
		            if (!(_.isString(param))) {
		              throw "Expected string parameters, not " + param;
		            }
		            _selections.push(param);
		          }
		        } else if (_.isFunction(projectionOrParameter)) {
		
		          /* Set the projection and calculate the fields it uses */
		          _projection = projectionOrParameter;
		          _selections = JavaScript.getProjectedFields(_projection);
		        } else {
		          throw "Expected a string or a function, not " + projectionOrParameter;
		        }
		        return this;
		      };
		      this.orderBy = function() {
		        var order, param, parameters, replacement, _i, _j, _len, _len1;
		        parameters = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
		        _version++;
		        for (_i = 0, _len = parameters.length; _i < _len; _i++) {
		          param = parameters[_i];
		          if (!(_.isString(param))) {
		            throw "Expected string parameters, not " + param;
		          }
		          _ordering[param] = true;
		          replacement = false;
		          for (_j = 0, _len1 = _orderClauses.length; _j < _len1; _j++) {
		            order = _orderClauses[_j];
		            if (order.name === param) {
		              replacement = true;
		              order.ascending = true;
		            }
		          }
		          if (!replacement) {
		            _orderClauses.push({
		              name: param,
		              ascending: true
		            });
		          }
		        }
		        return this;
		      };
		      this.orderByDescending = function() {
		        var order, param, parameters, replacement, _i, _j, _len, _len1;
		        parameters = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
		        _version++;
		        for (_i = 0, _len = parameters.length; _i < _len; _i++) {
		          param = parameters[_i];
		          if (!(_.isString(param))) {
		            throw "Expected string parameters, not " + param;
		          }
		          _ordering[param] = false;
		          replacement = false;
		          for (_j = 0, _len1 = _orderClauses.length; _j < _len1; _j++) {
		            order = _orderClauses[_j];
		            if (order.name === param) {
		              replacement = true;
		              order.ascending = false;
		            }
		          }
		          if (!replacement) {
		            _orderClauses.push({
		              name: param,
		              ascending: false
		            });
		          }
		        }
		        return this;
		      };
		      this.skip = function(count) {
		        _version++;
		        if (!(_.isNumber(count))) {
		          throw "Expected a number, not " + count;
		        }
		        _skip = count;
		        return this;
		      };
		      this.take = function(count) {
		        _version++;
		        if (!(_.isNumber(count))) {
		          throw "Expected a number, not " + count;
		        }
		        _take = count;
		        return this;
		      };
		
		      /*
		       * Indicate that the query should include the total count for all the
		       * records that would have been returned ignoring any take paging
		       * limit clause specified by client or server.
		       */
		      this.includeTotalCount = function() {
		        _version++;
		        _includeTotalCount = true;
		        return this;
		      };
		    }
		
		
		    /*
		     * Static method to register custom provider types.  A custom provider is
		     * an object with a toQuery method that takes a Query instance and
		     * returns a compiled query for that provider.
		     */
		
		    Query.registerProvider = function(name, provider) {
		      Query.Providers[name] = provider;
		      return Query.prototype["to" + name] = function() {
		        return provider != null ? typeof provider.toQuery === "function" ? provider.toQuery(this) : void 0 : void 0;
		      };
		    };
		
		
		    /*
		     * Expose the registered providers via the Query.Providers namespace.
		     */
		
		    Query.Providers = {};
		
		
		    /*
		     * Expose the query expressions and visitors externally via a
		     * Query.Expressions namespace.
		     */
		
		    Query.Expressions = Q;
		
		    return Query;
		
		  })();
		
		
		  /* Register the built in OData provider */
		
		  ODataProvider = require('./ODataProvider').ODataProvider;
		
		  Query.registerProvider('OData', new ODataProvider);
		
		}).call(this);
		
	};

	$__modules__.QueryNodes = function (exports) {
		// Generated by CoffeeScript 1.7.1
		
		/*
		 * ----------------------------------------------------------------------------
		 * Copyright (c) Microsoft Corporation. All rights reserved.
		 * ----------------------------------------------------------------------------
		 */
		
		
		/*
		 * Define a low level intermediate query expression language that we can
		 * translate other expressions languages (like JavaScript) into.
		 */
		
		
		/* Get the base Node class. */
		
		(function() {
		  var BinaryExpression, ConstantExpression, InvocationExpression, LiteralExpression, MemberExpression, Node, QueryExpression, QueryExpressionVisitor, UnaryExpression, Visitor, _ref,
		    __hasProp = {}.hasOwnProperty,
		    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };
		
		  _ref = require('./Node'), Node = _ref.Node, Visitor = _ref.Visitor;
		
		
		  /*
		   * Provides the base class from which the classes that represent expression tree
		   * nodes are derived.
		   */
		
		  exports.QueryExpression = QueryExpression = (function(_super) {
		    __extends(QueryExpression, _super);
		
		    function QueryExpression() {
		      QueryExpression.__super__.constructor.call(this);
		    }
		
		
		    /*
		     * Group a sequence of clauses together with a given operator (like And
		     * or Or).
		     */
		
		    QueryExpression.groupClauses = function(operator, clauses) {
		      var combine;
		      combine = function(left, right) {
		        if (!left) {
		          return right;
		        } else if (!right) {
		          return left;
		        } else {
		          return new BinaryExpression(operator, left, right);
		        }
		      };
		      return clauses.reduce(combine, null);
		    };
		
		    return QueryExpression;
		
		  })(Node);
		
		  exports.QueryExpressionVisitor = QueryExpressionVisitor = (function(_super) {
		    __extends(QueryExpressionVisitor, _super);
		
		    function QueryExpressionVisitor() {
		      QueryExpressionVisitor.__super__.constructor.call(this);
		    }
		
		    QueryExpressionVisitor.prototype.QueryExpression = function(node) {
		      return node;
		    };
		
		    return QueryExpressionVisitor;
		
		  })(Visitor);
		
		
		  /*
		   * Represents an expression that has a constant value.
		   */
		
		  exports.ConstantExpression = ConstantExpression = (function(_super) {
		    __extends(ConstantExpression, _super);
		
		
		    /*
		     * @value: The value of the constant expression.
		     */
		
		    function ConstantExpression(value) {
		      this.value = value;
		      ConstantExpression.__super__.constructor.call(this);
		    }
		
		    return ConstantExpression;
		
		  })(QueryExpression);
		
		  QueryExpressionVisitor.prototype.ConstantExpression = function(node) {
		    return this.QueryExpression(node);
		  };
		
		
		  /*
		   * Represents accessing a field.
		   */
		
		  exports.MemberExpression = MemberExpression = (function(_super) {
		    __extends(MemberExpression, _super);
		
		
		    /*
		     * @member: Gets the field to be accessed.
		     */
		
		    function MemberExpression(member) {
		      this.member = member;
		      MemberExpression.__super__.constructor.call(this);
		    }
		
		    return MemberExpression;
		
		  })(QueryExpression);
		
		  QueryExpressionVisitor.prototype.MemberExpression = function(node) {
		    return this.QueryExpression(node);
		  };
		
		
		  /*
		   * Represents an expression that has a binary operator.
		   */
		
		  exports.BinaryExpression = BinaryExpression = (function(_super) {
		    __extends(BinaryExpression, _super);
		
		
		    /*
		     * @operator: The operator of the binary expression.
		     * @left: The left operand of the binary operation.
		     * @right: The right operand of the binary operation.
		     */
		
		    function BinaryExpression(operator, left, right) {
		      this.operator = operator;
		      this.left = left;
		      this.right = right;
		      BinaryExpression.__super__.constructor.call(this);
		    }
		
		    return BinaryExpression;
		
		  })(QueryExpression);
		
		  QueryExpressionVisitor.prototype.BinaryExpression = function(node) {
		    node = this.QueryExpression(node);
		    node.left = this.visit(node.left);
		    node.right = this.visit(node.right);
		    return node;
		  };
		
		
		  /*
		   * Represents the known binary operators.
		   */
		
		  exports.BinaryOperators = {
		    And: 'And',
		    Or: 'Or',
		    Add: 'Add',
		    Subtract: 'Subtract',
		    Multiply: 'Multiply',
		    Divide: 'Divide',
		    Modulo: 'Modulo',
		    GreaterThan: 'GreaterThan',
		    GreaterThanOrEqual: 'GreaterThanOrEqual',
		    LessThan: 'LessThan',
		    LessThanOrEqual: 'LessThanOrEqual',
		    NotEqual: 'NotEqual',
		    Equal: 'Equal'
		  };
		
		
		  /*
		   * Represents the known unary operators.
		   */
		
		  exports.UnaryExpression = UnaryExpression = (function(_super) {
		    __extends(UnaryExpression, _super);
		
		
		    /*
		     * @operator: The operator of the unary expression.
		     * @operand: The operand of the unary expression.
		     */
		
		    function UnaryExpression(operator, operand) {
		      this.operator = operator;
		      this.operand = operand;
		      UnaryExpression.__super__.constructor.call(this);
		    }
		
		    return UnaryExpression;
		
		  })(QueryExpression);
		
		  QueryExpressionVisitor.prototype.UnaryExpression = function(node) {
		    node = this.QueryExpression(node);
		    node.operand = this.visit(node.operand);
		    return node;
		  };
		
		
		  /*
		   * Represents the known unary operators.
		   */
		
		  exports.UnaryOperators = {
		    Not: 'Not',
		    Negate: 'Negate',
		    Increment: 'Increment',
		    Decrement: 'Decrement'
		  };
		
		
		  /*
		   * Represents a method invocation.
		   */
		
		  exports.InvocationExpression = InvocationExpression = (function(_super) {
		    __extends(InvocationExpression, _super);
		
		
		    /*
		     * @method: The name of the method to invoke.
		     * @args: The arguments to the method.
		     */
		
		    function InvocationExpression(method, args) {
		      this.method = method;
		      this.args = args;
		      InvocationExpression.__super__.constructor.call(this);
		    }
		
		    return InvocationExpression;
		
		  })(QueryExpression);
		
		  QueryExpressionVisitor.prototype.InvocationExpression = function(node) {
		    node = this.QueryExpression(node);
		    node.args = this.visit(node.args);
		    return node;
		  };
		
		
		  /*
		   * Represents the known unary operators.
		   */
		
		  exports.Methods = {
		    Length: 'Length',
		    ToUpperCase: 'ToUpperCase',
		    ToLowerCase: 'ToLowerCase',
		    Trim: 'Trim',
		    IndexOf: 'IndexOf',
		    Replace: 'Replace',
		    Substring: 'Substring',
		    Concat: 'Concat',
		    Day: 'Day',
		    Month: 'Month',
		    Year: 'Year',
		    Floor: 'Floor',
		    Ceiling: 'Ceiling',
		    Round: 'Round'
		  };
		
		
		  /*
		   * Represents a literal string in the query language.
		   */
		
		  exports.LiteralExpression = LiteralExpression = (function(_super) {
		    __extends(LiteralExpression, _super);
		
		
		    /*
		     * @queryString
		     * @args
		     */
		
		    function LiteralExpression(queryString, args) {
		      this.queryString = queryString;
		      this.args = args != null ? args : [];
		      LiteralExpression.__super__.constructor.call(this);
		    }
		
		    return LiteralExpression;
		
		  })(QueryExpression);
		
		  QueryExpressionVisitor.prototype.LiteralExpression = function(node) {
		    return this.QueryExpression(node);
		  };
		
		}).call(this);
		
	};

	$__modules__.Utilities = function (exports) {
		// Generated by CoffeeScript 1.7.1
		
		/*
		 * ----------------------------------------------------------------------------
		 * Copyright (c) Microsoft Corporation. All rights reserved.
		 * ----------------------------------------------------------------------------
		 */
		
		(function() {
		  var classOf,
		    __slice = [].slice;
		
		  classOf = function(obj) {
		    return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
		  };
		
		  if (Array.prototype.reduce == null) {
		    Array.prototype.reduce = function() {
		      var accumulator, array, arrayLength, currentIndex, currentValue, moreArgs;
		      accumulator = arguments[0], moreArgs = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
		      array = this;
		      arrayLength = array.length;
		      currentIndex = 0;
		      currentValue = void 0;
		      if (array == null) {
		        throw new TypeError("Object is null or undefined");
		      }
		      if (typeof accumulator !== "function") {
		        throw new TypeError("First argument is not callable");
		      }
		      if (moreArgs.length === 0) {
		        if (arrayLength === 0) {
		          throw new TypeError("Array length is 0 and no second argument");
		        } else {
		          currentValue = array[0];
		          currentIndex = 1;
		        }
		      } else {
		        currentValue = moreArgs[0];
		      }
		      while (currentIndex < arrayLength) {
		        if (currentIndex in array) {
		          currentValue = accumulator.call(void 0, currentValue, array[currentIndex], array);
		        }
		        ++currentIndex;
		      }
		      return currentValue;
		    };
		  }
		
		  if (Array.prototype.map == null) {
		    Array.prototype.map = function(callback, thisArg) {
		      var elem, index, inputArray, len, outputArray, _i, _len;
		      if (typeof this === "undefined" || this === null) {
		        throw new TypeError("this is null or not defined");
		      }
		      if (typeof callback !== "function") {
		        throw new TypeError(callback + " is not a function");
		      }
		      thisArg = thisArg ? thisArg : void 0;
		      inputArray = Object(this);
		      len = inputArray.length >>> 0;
		      outputArray = new Array(len);
		      for (index = _i = 0, _len = inputArray.length; _i < _len; index = ++_i) {
		        elem = inputArray[index];
		        if (index in inputArray) {
		          outputArray[index] = callback.call(thisArg, elem, index, inputArray);
		        }
		      }
		      return outputArray;
		    };
		  }
		
		  if (Array.isArray == null) {
		    Array.isArray = function(vArg) {
		      return Object.prototype.toString.call(vArg) === "[object Array]";
		    };
		  }
		
		  exports.isObject = function(obj) {
		    return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase() === 'object';
		  };
		
		  exports.isString = function(obj) {
		    return typeof obj === 'string';
		  };
		
		  exports.isFunction = function(obj) {
		    return typeof obj === 'function';
		  };
		
		  exports.isArray = Array.isArray;
		
		  exports.isNumber = function(obj) {
		    return typeof obj === 'number';
		  };
		
		  exports.isBoolean = function(obj) {
		    return typeof obj === 'boolean';
		  };
		
		  exports.isDate = function(obj) {
		    return classOf(obj) === 'date';
		  };
		
		  exports.functionName = function(fn) {
		    var index, prefix, source;
		    if (typeof Function.prototype.name === 'function') {
		      return Function.prototype.name.call(fn);
		    } else {
		      source = fn.toString();
		      prefix = 'function ';
		      if (source.slice(0, +(prefix.length - 1) + 1 || 9e9) === prefix) {
		        index = source.indexOf('(', prefix.length);
		        if (index > prefix.length) {
		          return source.slice(prefix.length, +(index - 1) + 1 || 9e9);
		        }
		      }
		      return null;
		    }
		  };
		
		}).call(this);
		
	};

	$__modules__.esprima = function (exports) {
		/*
		  Copyright (C) 2013 Ariya Hidayat <ariya.hidayat@gmail.com>
		  Copyright (C) 2013 Thaddee Tyl <thaddee.tyl@gmail.com>
		  Copyright (C) 2013 Mathias Bynens <mathias@qiwi.be>
		  Copyright (C) 2012 Ariya Hidayat <ariya.hidayat@gmail.com>
		  Copyright (C) 2012 Mathias Bynens <mathias@qiwi.be>
		  Copyright (C) 2012 Joost-Wim Boekesteijn <joost-wim@boekesteijn.nl>
		  Copyright (C) 2012 Kris Kowal <kris.kowal@cixar.com>
		  Copyright (C) 2012 Yusuke Suzuki <utatane.tea@gmail.com>
		  Copyright (C) 2012 Arpad Borsos <arpad.borsos@googlemail.com>
		  Copyright (C) 2011 Ariya Hidayat <ariya.hidayat@gmail.com>
		
		  Redistribution and use in source and binary forms, with or without
		  modification, are permitted provided that the following conditions are met:
		
		    * Redistributions of source code must retain the above copyright
		      notice, this list of conditions and the following disclaimer.
		    * Redistributions in binary form must reproduce the above copyright
		      notice, this list of conditions and the following disclaimer in the
		      documentation and/or other materials provided with the distribution.
		
		  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
		  AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
		  IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
		  ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
		  DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
		  (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
		  LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
		  ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
		  (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
		  THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
		*/
		
		/*jslint bitwise:true plusplus:true */
		/*global esprima:true, define:true, exports:true, window: true,
		throwErrorTolerant: true,
		throwError: true, generateStatement: true, peek: true,
		parseAssignmentExpression: true, parseBlock: true, parseExpression: true,
		parseFunctionDeclaration: true, parseFunctionExpression: true,
		parseFunctionSourceElements: true, parseVariableIdentifier: true,
		parseLeftHandSideExpression: true, parseParams: true, validateParam: true,
		parseUnaryExpression: true,
		parseStatement: true, parseSourceElement: true */
		
		(function (root, factory) {
		    'use strict';
		
		    // Universal Module Definition (UMD) to support AMD, CommonJS/Node.js,
		    // Rhino, and plain browser loading.
		
		    /* istanbul ignore next */
		    if (typeof define === 'function' && define.amd) {
		        define(['exports'], factory);
		    } else if (typeof exports !== 'undefined') {
		        factory(exports);
		    } else {
		        factory((root.esprima = {}));
		    }
		}(this, function (exports) {
		    'use strict';
		
		    var Token,
		        TokenName,
		        FnExprTokens,
		        Syntax,
		        PlaceHolders,
		        PropertyKind,
		        Messages,
		        Regex,
		        source,
		        strict,
		        index,
		        lineNumber,
		        lineStart,
		        length,
		        lookahead,
		        state,
		        extra;
		
		    Token = {
		        BooleanLiteral: 1,
		        EOF: 2,
		        Identifier: 3,
		        Keyword: 4,
		        NullLiteral: 5,
		        NumericLiteral: 6,
		        Punctuator: 7,
		        StringLiteral: 8,
		        RegularExpression: 9
		    };
		
		    TokenName = {};
		    TokenName[Token.BooleanLiteral] = 'Boolean';
		    TokenName[Token.EOF] = '<end>';
		    TokenName[Token.Identifier] = 'Identifier';
		    TokenName[Token.Keyword] = 'Keyword';
		    TokenName[Token.NullLiteral] = 'Null';
		    TokenName[Token.NumericLiteral] = 'Numeric';
		    TokenName[Token.Punctuator] = 'Punctuator';
		    TokenName[Token.StringLiteral] = 'String';
		    TokenName[Token.RegularExpression] = 'RegularExpression';
		
		    // A function following one of those tokens is an expression.
		    FnExprTokens = ['(', '{', '[', 'in', 'typeof', 'instanceof', 'new',
		                    'return', 'case', 'delete', 'throw', 'void',
		                    // assignment operators
		                    '=', '+=', '-=', '*=', '/=', '%=', '<<=', '>>=', '>>>=',
		                    '&=', '|=', '^=', ',',
		                    // binary/unary operators
		                    '+', '-', '*', '/', '%', '++', '--', '<<', '>>', '>>>', '&',
		                    '|', '^', '!', '~', '&&', '||', '?', ':', '===', '==', '>=',
		                    '<=', '<', '>', '!=', '!=='];
		
		    Syntax = {
		        AssignmentExpression: 'AssignmentExpression',
		        ArrayExpression: 'ArrayExpression',
		        ArrowFunctionExpression: 'ArrowFunctionExpression',
		        BlockStatement: 'BlockStatement',
		        BinaryExpression: 'BinaryExpression',
		        BreakStatement: 'BreakStatement',
		        CallExpression: 'CallExpression',
		        CatchClause: 'CatchClause',
		        ConditionalExpression: 'ConditionalExpression',
		        ContinueStatement: 'ContinueStatement',
		        DoWhileStatement: 'DoWhileStatement',
		        DebuggerStatement: 'DebuggerStatement',
		        EmptyStatement: 'EmptyStatement',
		        ExpressionStatement: 'ExpressionStatement',
		        ForStatement: 'ForStatement',
		        ForInStatement: 'ForInStatement',
		        FunctionDeclaration: 'FunctionDeclaration',
		        FunctionExpression: 'FunctionExpression',
		        Identifier: 'Identifier',
		        IfStatement: 'IfStatement',
		        Literal: 'Literal',
		        LabeledStatement: 'LabeledStatement',
		        LogicalExpression: 'LogicalExpression',
		        MemberExpression: 'MemberExpression',
		        NewExpression: 'NewExpression',
		        ObjectExpression: 'ObjectExpression',
		        Program: 'Program',
		        Property: 'Property',
		        ReturnStatement: 'ReturnStatement',
		        SequenceExpression: 'SequenceExpression',
		        SwitchStatement: 'SwitchStatement',
		        SwitchCase: 'SwitchCase',
		        ThisExpression: 'ThisExpression',
		        ThrowStatement: 'ThrowStatement',
		        TryStatement: 'TryStatement',
		        UnaryExpression: 'UnaryExpression',
		        UpdateExpression: 'UpdateExpression',
		        VariableDeclaration: 'VariableDeclaration',
		        VariableDeclarator: 'VariableDeclarator',
		        WhileStatement: 'WhileStatement',
		        WithStatement: 'WithStatement'
		    };
		
		    PlaceHolders = {
		        ArrowParameterPlaceHolder: {
		            type: 'ArrowParameterPlaceHolder'
		        }
		    };
		
		    PropertyKind = {
		        Data: 1,
		        Get: 2,
		        Set: 4
		    };
		
		    // Error messages should be identical to V8.
		    Messages = {
		        UnexpectedToken:  'Unexpected token %0',
		        UnexpectedNumber:  'Unexpected number',
		        UnexpectedString:  'Unexpected string',
		        UnexpectedIdentifier:  'Unexpected identifier',
		        UnexpectedReserved:  'Unexpected reserved word',
		        UnexpectedEOS:  'Unexpected end of input',
		        NewlineAfterThrow:  'Illegal newline after throw',
		        InvalidRegExp: 'Invalid regular expression',
		        UnterminatedRegExp:  'Invalid regular expression: missing /',
		        InvalidLHSInAssignment:  'Invalid left-hand side in assignment',
		        InvalidLHSInForIn:  'Invalid left-hand side in for-in',
		        MultipleDefaultsInSwitch: 'More than one default clause in switch statement',
		        NoCatchOrFinally:  'Missing catch or finally after try',
		        UnknownLabel: 'Undefined label \'%0\'',
		        Redeclaration: '%0 \'%1\' has already been declared',
		        IllegalContinue: 'Illegal continue statement',
		        IllegalBreak: 'Illegal break statement',
		        IllegalReturn: 'Illegal return statement',
		        StrictModeWith:  'Strict mode code may not include a with statement',
		        StrictCatchVariable:  'Catch variable may not be eval or arguments in strict mode',
		        StrictVarName:  'Variable name may not be eval or arguments in strict mode',
		        StrictParamName:  'Parameter name eval or arguments is not allowed in strict mode',
		        StrictParamDupe: 'Strict mode function may not have duplicate parameter names',
		        StrictFunctionName:  'Function name may not be eval or arguments in strict mode',
		        StrictOctalLiteral:  'Octal literals are not allowed in strict mode.',
		        StrictDelete:  'Delete of an unqualified identifier in strict mode.',
		        StrictDuplicateProperty:  'Duplicate data property in object literal not allowed in strict mode',
		        AccessorDataProperty:  'Object literal may not have data and accessor property with the same name',
		        AccessorGetSet:  'Object literal may not have multiple get/set accessors with the same name',
		        StrictLHSAssignment:  'Assignment to eval or arguments is not allowed in strict mode',
		        StrictLHSPostfix:  'Postfix increment/decrement may not have eval or arguments operand in strict mode',
		        StrictLHSPrefix:  'Prefix increment/decrement may not have eval or arguments operand in strict mode',
		        StrictReservedWord:  'Use of future reserved word in strict mode'
		    };
		
		    // See also tools/generate-unicode-regex.py.
		    Regex = {
		        NonAsciiIdentifierStart: new RegExp('[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B2\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA7AD\uA7B0\uA7B1\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB5F\uAB64\uAB65\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]'),
		        NonAsciiIdentifierPart: new RegExp('[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B2\u08E4-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58\u0C59\u0C60-\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D57\u0D60-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFC-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA69D\uA69F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA7AD\uA7B0\uA7B1\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C4\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB5F\uAB64\uAB65\uABC0-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2D\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]')
		    };
		
		    // Ensure the condition is true, otherwise throw an error.
		    // This is only to have a better contract semantic, i.e. another safety net
		    // to catch a logic error. The condition shall be fulfilled in normal case.
		    // Do NOT use this to enforce a certain condition on any user input.
		
		    function assert(condition, message) {
		        /* istanbul ignore if */
		        if (!condition) {
		            throw new Error('ASSERT: ' + message);
		        }
		    }
		
		    function isDecimalDigit(ch) {
		        return (ch >= 0x30 && ch <= 0x39);   // 0..9
		    }
		
		    function isHexDigit(ch) {
		        return '0123456789abcdefABCDEF'.indexOf(ch) >= 0;
		    }
		
		    function isOctalDigit(ch) {
		        return '01234567'.indexOf(ch) >= 0;
		    }
		
		
		    // 7.2 White Space
		
		    function isWhiteSpace(ch) {
		        return (ch === 0x20) || (ch === 0x09) || (ch === 0x0B) || (ch === 0x0C) || (ch === 0xA0) ||
		            (ch >= 0x1680 && [0x1680, 0x180E, 0x2000, 0x2001, 0x2002, 0x2003, 0x2004, 0x2005, 0x2006, 0x2007, 0x2008, 0x2009, 0x200A, 0x202F, 0x205F, 0x3000, 0xFEFF].indexOf(ch) >= 0);
		    }
		
		    // 7.3 Line Terminators
		
		    function isLineTerminator(ch) {
		        return (ch === 0x0A) || (ch === 0x0D) || (ch === 0x2028) || (ch === 0x2029);
		    }
		
		    // 7.6 Identifier Names and Identifiers
		
		    function isIdentifierStart(ch) {
		        return (ch === 0x24) || (ch === 0x5F) ||  // $ (dollar) and _ (underscore)
		            (ch >= 0x41 && ch <= 0x5A) ||         // A..Z
		            (ch >= 0x61 && ch <= 0x7A) ||         // a..z
		            (ch === 0x5C) ||                      // \ (backslash)
		            ((ch >= 0x80) && Regex.NonAsciiIdentifierStart.test(String.fromCharCode(ch)));
		    }
		
		    function isIdentifierPart(ch) {
		        return (ch === 0x24) || (ch === 0x5F) ||  // $ (dollar) and _ (underscore)
		            (ch >= 0x41 && ch <= 0x5A) ||         // A..Z
		            (ch >= 0x61 && ch <= 0x7A) ||         // a..z
		            (ch >= 0x30 && ch <= 0x39) ||         // 0..9
		            (ch === 0x5C) ||                      // \ (backslash)
		            ((ch >= 0x80) && Regex.NonAsciiIdentifierPart.test(String.fromCharCode(ch)));
		    }
		
		    // 7.6.1.2 Future Reserved Words
		
		    function isFutureReservedWord(id) {
		        switch (id) {
		        case 'class':
		        case 'enum':
		        case 'export':
		        case 'extends':
		        case 'import':
		        case 'super':
		            return true;
		        default:
		            return false;
		        }
		    }
		
		    function isStrictModeReservedWord(id) {
		        switch (id) {
		        case 'implements':
		        case 'interface':
		        case 'package':
		        case 'private':
		        case 'protected':
		        case 'public':
		        case 'static':
		        case 'yield':
		        case 'let':
		            return true;
		        default:
		            return false;
		        }
		    }
		
		    function isRestrictedWord(id) {
		        return id === 'eval' || id === 'arguments';
		    }
		
		    // 7.6.1.1 Keywords
		
		    function isKeyword(id) {
		        if (strict && isStrictModeReservedWord(id)) {
		            return true;
		        }
		
		        // 'const' is specialized as Keyword in V8.
		        // 'yield' and 'let' are for compatiblity with SpiderMonkey and ES.next.
		        // Some others are from future reserved words.
		
		        switch (id.length) {
		        case 2:
		            return (id === 'if') || (id === 'in') || (id === 'do');
		        case 3:
		            return (id === 'var') || (id === 'for') || (id === 'new') ||
		                (id === 'try') || (id === 'let');
		        case 4:
		            return (id === 'this') || (id === 'else') || (id === 'case') ||
		                (id === 'void') || (id === 'with') || (id === 'enum');
		        case 5:
		            return (id === 'while') || (id === 'break') || (id === 'catch') ||
		                (id === 'throw') || (id === 'const') || (id === 'yield') ||
		                (id === 'class') || (id === 'super');
		        case 6:
		            return (id === 'return') || (id === 'typeof') || (id === 'delete') ||
		                (id === 'switch') || (id === 'export') || (id === 'import');
		        case 7:
		            return (id === 'default') || (id === 'finally') || (id === 'extends');
		        case 8:
		            return (id === 'function') || (id === 'continue') || (id === 'debugger');
		        case 10:
		            return (id === 'instanceof');
		        default:
		            return false;
		        }
		    }
		
		    // 7.4 Comments
		
		    function addComment(type, value, start, end, loc) {
		        var comment;
		
		        assert(typeof start === 'number', 'Comment must have valid position');
		
		        // Because the way the actual token is scanned, often the comments
		        // (if any) are skipped twice during the lexical analysis.
		        // Thus, we need to skip adding a comment if the comment array already
		        // handled it.
		        if (state.lastCommentStart >= start) {
		            return;
		        }
		        state.lastCommentStart = start;
		
		        comment = {
		            type: type,
		            value: value
		        };
		        if (extra.range) {
		            comment.range = [start, end];
		        }
		        if (extra.loc) {
		            comment.loc = loc;
		        }
		        extra.comments.push(comment);
		        if (extra.attachComment) {
		            extra.leadingComments.push(comment);
		            extra.trailingComments.push(comment);
		        }
		    }
		
		    function skipSingleLineComment(offset) {
		        var start, loc, ch, comment;
		
		        start = index - offset;
		        loc = {
		            start: {
		                line: lineNumber,
		                column: index - lineStart - offset
		            }
		        };
		
		        while (index < length) {
		            ch = source.charCodeAt(index);
		            ++index;
		            if (isLineTerminator(ch)) {
		                if (extra.comments) {
		                    comment = source.slice(start + offset, index - 1);
		                    loc.end = {
		                        line: lineNumber,
		                        column: index - lineStart - 1
		                    };
		                    addComment('Line', comment, start, index - 1, loc);
		                }
		                if (ch === 13 && source.charCodeAt(index) === 10) {
		                    ++index;
		                }
		                ++lineNumber;
		                lineStart = index;
		                return;
		            }
		        }
		
		        if (extra.comments) {
		            comment = source.slice(start + offset, index);
		            loc.end = {
		                line: lineNumber,
		                column: index - lineStart
		            };
		            addComment('Line', comment, start, index, loc);
		        }
		    }
		
		    function skipMultiLineComment() {
		        var start, loc, ch, comment;
		
		        if (extra.comments) {
		            start = index - 2;
		            loc = {
		                start: {
		                    line: lineNumber,
		                    column: index - lineStart - 2
		                }
		            };
		        }
		
		        while (index < length) {
		            ch = source.charCodeAt(index);
		            if (isLineTerminator(ch)) {
		                if (ch === 0x0D && source.charCodeAt(index + 1) === 0x0A) {
		                    ++index;
		                }
		                ++lineNumber;
		                ++index;
		                lineStart = index;
		                if (index >= length) {
		                    throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
		                }
		            } else if (ch === 0x2A) {
		                // Block comment ends with '*/'.
		                if (source.charCodeAt(index + 1) === 0x2F) {
		                    ++index;
		                    ++index;
		                    if (extra.comments) {
		                        comment = source.slice(start + 2, index - 2);
		                        loc.end = {
		                            line: lineNumber,
		                            column: index - lineStart
		                        };
		                        addComment('Block', comment, start, index, loc);
		                    }
		                    return;
		                }
		                ++index;
		            } else {
		                ++index;
		            }
		        }
		
		        throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
		    }
		
		    function skipComment() {
		        var ch, start;
		
		        start = (index === 0);
		        while (index < length) {
		            ch = source.charCodeAt(index);
		
		            if (isWhiteSpace(ch)) {
		                ++index;
		            } else if (isLineTerminator(ch)) {
		                ++index;
		                if (ch === 0x0D && source.charCodeAt(index) === 0x0A) {
		                    ++index;
		                }
		                ++lineNumber;
		                lineStart = index;
		                start = true;
		            } else if (ch === 0x2F) { // U+002F is '/'
		                ch = source.charCodeAt(index + 1);
		                if (ch === 0x2F) {
		                    ++index;
		                    ++index;
		                    skipSingleLineComment(2);
		                    start = true;
		                } else if (ch === 0x2A) {  // U+002A is '*'
		                    ++index;
		                    ++index;
		                    skipMultiLineComment();
		                } else {
		                    break;
		                }
		            } else if (start && ch === 0x2D) { // U+002D is '-'
		                // U+003E is '>'
		                if ((source.charCodeAt(index + 1) === 0x2D) && (source.charCodeAt(index + 2) === 0x3E)) {
		                    // '-->' is a single-line comment
		                    index += 3;
		                    skipSingleLineComment(3);
		                } else {
		                    break;
		                }
		            } else if (ch === 0x3C) { // U+003C is '<'
		                if (source.slice(index + 1, index + 4) === '!--') {
		                    ++index; // `<`
		                    ++index; // `!`
		                    ++index; // `-`
		                    ++index; // `-`
		                    skipSingleLineComment(4);
		                } else {
		                    break;
		                }
		            } else {
		                break;
		            }
		        }
		    }
		
		    function scanHexEscape(prefix) {
		        var i, len, ch, code = 0;
		
		        len = (prefix === 'u') ? 4 : 2;
		        for (i = 0; i < len; ++i) {
		            if (index < length && isHexDigit(source[index])) {
		                ch = source[index++];
		                code = code * 16 + '0123456789abcdef'.indexOf(ch.toLowerCase());
		            } else {
		                return '';
		            }
		        }
		        return String.fromCharCode(code);
		    }
		
		    function scanUnicodeCodePointEscape() {
		        var ch, code, cu1, cu2;
		
		        ch = source[index];
		        code = 0;
		
		        // At least, one hex digit is required.
		        if (ch === '}') {
		            throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
		        }
		
		        while (index < length) {
		            ch = source[index++];
		            if (!isHexDigit(ch)) {
		                break;
		            }
		            code = code * 16 + '0123456789abcdef'.indexOf(ch.toLowerCase());
		        }
		
		        if (code > 0x10FFFF || ch !== '}') {
		            throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
		        }
		
		        // UTF-16 Encoding
		        if (code <= 0xFFFF) {
		            return String.fromCharCode(code);
		        }
		        cu1 = ((code - 0x10000) >> 10) + 0xD800;
		        cu2 = ((code - 0x10000) & 1023) + 0xDC00;
		        return String.fromCharCode(cu1, cu2);
		    }
		
		    function getEscapedIdentifier() {
		        var ch, id;
		
		        ch = source.charCodeAt(index++);
		        id = String.fromCharCode(ch);
		
		        // '\u' (U+005C, U+0075) denotes an escaped character.
		        if (ch === 0x5C) {
		            if (source.charCodeAt(index) !== 0x75) {
		                throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
		            }
		            ++index;
		            ch = scanHexEscape('u');
		            if (!ch || ch === '\\' || !isIdentifierStart(ch.charCodeAt(0))) {
		                throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
		            }
		            id = ch;
		        }
		
		        while (index < length) {
		            ch = source.charCodeAt(index);
		            if (!isIdentifierPart(ch)) {
		                break;
		            }
		            ++index;
		            id += String.fromCharCode(ch);
		
		            // '\u' (U+005C, U+0075) denotes an escaped character.
		            if (ch === 0x5C) {
		                id = id.substr(0, id.length - 1);
		                if (source.charCodeAt(index) !== 0x75) {
		                    throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
		                }
		                ++index;
		                ch = scanHexEscape('u');
		                if (!ch || ch === '\\' || !isIdentifierPart(ch.charCodeAt(0))) {
		                    throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
		                }
		                id += ch;
		            }
		        }
		
		        return id;
		    }
		
		    function getIdentifier() {
		        var start, ch;
		
		        start = index++;
		        while (index < length) {
		            ch = source.charCodeAt(index);
		            if (ch === 0x5C) {
		                // Blackslash (U+005C) marks Unicode escape sequence.
		                index = start;
		                return getEscapedIdentifier();
		            }
		            if (isIdentifierPart(ch)) {
		                ++index;
		            } else {
		                break;
		            }
		        }
		
		        return source.slice(start, index);
		    }
		
		    function scanIdentifier() {
		        var start, id, type;
		
		        start = index;
		
		        // Backslash (U+005C) starts an escaped character.
		        id = (source.charCodeAt(index) === 0x5C) ? getEscapedIdentifier() : getIdentifier();
		
		        // There is no keyword or literal with only one character.
		        // Thus, it must be an identifier.
		        if (id.length === 1) {
		            type = Token.Identifier;
		        } else if (isKeyword(id)) {
		            type = Token.Keyword;
		        } else if (id === 'null') {
		            type = Token.NullLiteral;
		        } else if (id === 'true' || id === 'false') {
		            type = Token.BooleanLiteral;
		        } else {
		            type = Token.Identifier;
		        }
		
		        return {
		            type: type,
		            value: id,
		            lineNumber: lineNumber,
		            lineStart: lineStart,
		            start: start,
		            end: index
		        };
		    }
		
		
		    // 7.7 Punctuators
		
		    function scanPunctuator() {
		        var start = index,
		            code = source.charCodeAt(index),
		            code2,
		            ch1 = source[index],
		            ch2,
		            ch3,
		            ch4;
		
		        switch (code) {
		
		        // Check for most common single-character punctuators.
		        case 0x2E:  // . dot
		        case 0x28:  // ( open bracket
		        case 0x29:  // ) close bracket
		        case 0x3B:  // ; semicolon
		        case 0x2C:  // , comma
		        case 0x7B:  // { open curly brace
		        case 0x7D:  // } close curly brace
		        case 0x5B:  // [
		        case 0x5D:  // ]
		        case 0x3A:  // :
		        case 0x3F:  // ?
		        case 0x7E:  // ~
		            ++index;
		            if (extra.tokenize) {
		                if (code === 0x28) {
		                    extra.openParenToken = extra.tokens.length;
		                } else if (code === 0x7B) {
		                    extra.openCurlyToken = extra.tokens.length;
		                }
		            }
		            return {
		                type: Token.Punctuator,
		                value: String.fromCharCode(code),
		                lineNumber: lineNumber,
		                lineStart: lineStart,
		                start: start,
		                end: index
		            };
		
		        default:
		            code2 = source.charCodeAt(index + 1);
		
		            // '=' (U+003D) marks an assignment or comparison operator.
		            if (code2 === 0x3D) {
		                switch (code) {
		                case 0x2B:  // +
		                case 0x2D:  // -
		                case 0x2F:  // /
		                case 0x3C:  // <
		                case 0x3E:  // >
		                case 0x5E:  // ^
		                case 0x7C:  // |
		                case 0x25:  // %
		                case 0x26:  // &
		                case 0x2A:  // *
		                    index += 2;
		                    return {
		                        type: Token.Punctuator,
		                        value: String.fromCharCode(code) + String.fromCharCode(code2),
		                        lineNumber: lineNumber,
		                        lineStart: lineStart,
		                        start: start,
		                        end: index
		                    };
		
		                case 0x21: // !
		                case 0x3D: // =
		                    index += 2;
		
		                    // !== and ===
		                    if (source.charCodeAt(index) === 0x3D) {
		                        ++index;
		                    }
		                    return {
		                        type: Token.Punctuator,
		                        value: source.slice(start, index),
		                        lineNumber: lineNumber,
		                        lineStart: lineStart,
		                        start: start,
		                        end: index
		                    };
		                }
		            }
		        }
		
		        // 4-character punctuator: >>>=
		
		        ch4 = source.substr(index, 4);
		
		        if (ch4 === '>>>=') {
		            index += 4;
		            return {
		                type: Token.Punctuator,
		                value: ch4,
		                lineNumber: lineNumber,
		                lineStart: lineStart,
		                start: start,
		                end: index
		            };
		        }
		
		        // 3-character punctuators: === !== >>> <<= >>=
		
		        ch3 = ch4.substr(0, 3);
		
		        if (ch3 === '>>>' || ch3 === '<<=' || ch3 === '>>=') {
		            index += 3;
		            return {
		                type: Token.Punctuator,
		                value: ch3,
		                lineNumber: lineNumber,
		                lineStart: lineStart,
		                start: start,
		                end: index
		            };
		        }
		
		        // Other 2-character punctuators: ++ -- << >> && ||
		        ch2 = ch3.substr(0, 2);
		
		        if ((ch1 === ch2[1] && ('+-<>&|'.indexOf(ch1) >= 0)) || ch2 === '=>') {
		            index += 2;
		            return {
		                type: Token.Punctuator,
		                value: ch2,
		                lineNumber: lineNumber,
		                lineStart: lineStart,
		                start: start,
		                end: index
		            };
		        }
		
		        // 1-character punctuators: < > = ! + - * % & | ^ /
		
		        if ('<>=!+-*%&|^/'.indexOf(ch1) >= 0) {
		            ++index;
		            return {
		                type: Token.Punctuator,
		                value: ch1,
		                lineNumber: lineNumber,
		                lineStart: lineStart,
		                start: start,
		                end: index
		            };
		        }
		
		        throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
		    }
		
		    // 7.8.3 Numeric Literals
		
		    function scanHexLiteral(start) {
		        var number = '';
		
		        while (index < length) {
		            if (!isHexDigit(source[index])) {
		                break;
		            }
		            number += source[index++];
		        }
		
		        if (number.length === 0) {
		            throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
		        }
		
		        if (isIdentifierStart(source.charCodeAt(index))) {
		            throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
		        }
		
		        return {
		            type: Token.NumericLiteral,
		            value: parseInt('0x' + number, 16),
		            lineNumber: lineNumber,
		            lineStart: lineStart,
		            start: start,
		            end: index
		        };
		    }
		
		    function scanOctalLiteral(start) {
		        var number = '0' + source[index++];
		        while (index < length) {
		            if (!isOctalDigit(source[index])) {
		                break;
		            }
		            number += source[index++];
		        }
		
		        if (isIdentifierStart(source.charCodeAt(index)) || isDecimalDigit(source.charCodeAt(index))) {
		            throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
		        }
		
		        return {
		            type: Token.NumericLiteral,
		            value: parseInt(number, 8),
		            octal: true,
		            lineNumber: lineNumber,
		            lineStart: lineStart,
		            start: start,
		            end: index
		        };
		    }
		
		    function scanNumericLiteral() {
		        var number, start, ch;
		
		        ch = source[index];
		        assert(isDecimalDigit(ch.charCodeAt(0)) || (ch === '.'),
		            'Numeric literal must start with a decimal digit or a decimal point');
		
		        start = index;
		        number = '';
		        if (ch !== '.') {
		            number = source[index++];
		            ch = source[index];
		
		            // Hex number starts with '0x'.
		            // Octal number starts with '0'.
		            if (number === '0') {
		                if (ch === 'x' || ch === 'X') {
		                    ++index;
		                    return scanHexLiteral(start);
		                }
		                if (isOctalDigit(ch)) {
		                    return scanOctalLiteral(start);
		                }
		
		                // decimal number starts with '0' such as '09' is illegal.
		                if (ch && isDecimalDigit(ch.charCodeAt(0))) {
		                    throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
		                }
		            }
		
		            while (isDecimalDigit(source.charCodeAt(index))) {
		                number += source[index++];
		            }
		            ch = source[index];
		        }
		
		        if (ch === '.') {
		            number += source[index++];
		            while (isDecimalDigit(source.charCodeAt(index))) {
		                number += source[index++];
		            }
		            ch = source[index];
		        }
		
		        if (ch === 'e' || ch === 'E') {
		            number += source[index++];
		
		            ch = source[index];
		            if (ch === '+' || ch === '-') {
		                number += source[index++];
		            }
		            if (isDecimalDigit(source.charCodeAt(index))) {
		                while (isDecimalDigit(source.charCodeAt(index))) {
		                    number += source[index++];
		                }
		            } else {
		                throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
		            }
		        }
		
		        if (isIdentifierStart(source.charCodeAt(index))) {
		            throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
		        }
		
		        return {
		            type: Token.NumericLiteral,
		            value: parseFloat(number),
		            lineNumber: lineNumber,
		            lineStart: lineStart,
		            start: start,
		            end: index
		        };
		    }
		
		    // 7.8.4 String Literals
		
		    function scanStringLiteral() {
		        var str = '', quote, start, ch, code, unescaped, restore, octal = false, startLineNumber, startLineStart;
		        startLineNumber = lineNumber;
		        startLineStart = lineStart;
		
		        quote = source[index];
		        assert((quote === '\'' || quote === '"'),
		            'String literal must starts with a quote');
		
		        start = index;
		        ++index;
		
		        while (index < length) {
		            ch = source[index++];
		
		            if (ch === quote) {
		                quote = '';
		                break;
		            } else if (ch === '\\') {
		                ch = source[index++];
		                if (!ch || !isLineTerminator(ch.charCodeAt(0))) {
		                    switch (ch) {
		                    case 'u':
		                    case 'x':
		                        if (source[index] === '{') {
		                            ++index;
		                            str += scanUnicodeCodePointEscape();
		                        } else {
		                            restore = index;
		                            unescaped = scanHexEscape(ch);
		                            if (unescaped) {
		                                str += unescaped;
		                            } else {
		                                index = restore;
		                                str += ch;
		                            }
		                        }
		                        break;
		                    case 'n':
		                        str += '\n';
		                        break;
		                    case 'r':
		                        str += '\r';
		                        break;
		                    case 't':
		                        str += '\t';
		                        break;
		                    case 'b':
		                        str += '\b';
		                        break;
		                    case 'f':
		                        str += '\f';
		                        break;
		                    case 'v':
		                        str += '\x0B';
		                        break;
		
		                    default:
		                        if (isOctalDigit(ch)) {
		                            code = '01234567'.indexOf(ch);
		
		                            // \0 is not octal escape sequence
		                            if (code !== 0) {
		                                octal = true;
		                            }
		
		                            if (index < length && isOctalDigit(source[index])) {
		                                octal = true;
		                                code = code * 8 + '01234567'.indexOf(source[index++]);
		
		                                // 3 digits are only allowed when string starts
		                                // with 0, 1, 2, 3
		                                if ('0123'.indexOf(ch) >= 0 &&
		                                        index < length &&
		                                        isOctalDigit(source[index])) {
		                                    code = code * 8 + '01234567'.indexOf(source[index++]);
		                                }
		                            }
		                            str += String.fromCharCode(code);
		                        } else {
		                            str += ch;
		                        }
		                        break;
		                    }
		                } else {
		                    ++lineNumber;
		                    if (ch ===  '\r' && source[index] === '\n') {
		                        ++index;
		                    }
		                    lineStart = index;
		                }
		            } else if (isLineTerminator(ch.charCodeAt(0))) {
		                break;
		            } else {
		                str += ch;
		            }
		        }
		
		        if (quote !== '') {
		            throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
		        }
		
		        return {
		            type: Token.StringLiteral,
		            value: str,
		            octal: octal,
		            startLineNumber: startLineNumber,
		            startLineStart: startLineStart,
		            lineNumber: lineNumber,
		            lineStart: lineStart,
		            start: start,
		            end: index
		        };
		    }
		
		    function testRegExp(pattern, flags) {
		        var value;
		        try {
		            value = new RegExp(pattern, flags);
		        } catch (e) {
		            throwError({}, Messages.InvalidRegExp);
		        }
		        return value;
		    }
		
		    function scanRegExpBody() {
		        var ch, str, classMarker, terminated, body;
		
		        ch = source[index];
		        assert(ch === '/', 'Regular expression literal must start with a slash');
		        str = source[index++];
		
		        classMarker = false;
		        terminated = false;
		        while (index < length) {
		            ch = source[index++];
		            str += ch;
		            if (ch === '\\') {
		                ch = source[index++];
		                // ECMA-262 7.8.5
		                if (isLineTerminator(ch.charCodeAt(0))) {
		                    throwError({}, Messages.UnterminatedRegExp);
		                }
		                str += ch;
		            } else if (isLineTerminator(ch.charCodeAt(0))) {
		                throwError({}, Messages.UnterminatedRegExp);
		            } else if (classMarker) {
		                if (ch === ']') {
		                    classMarker = false;
		                }
		            } else {
		                if (ch === '/') {
		                    terminated = true;
		                    break;
		                } else if (ch === '[') {
		                    classMarker = true;
		                }
		            }
		        }
		
		        if (!terminated) {
		            throwError({}, Messages.UnterminatedRegExp);
		        }
		
		        // Exclude leading and trailing slash.
		        body = str.substr(1, str.length - 2);
		        return {
		            value: body,
		            literal: str
		        };
		    }
		
		    function scanRegExpFlags() {
		        var ch, str, flags, restore;
		
		        str = '';
		        flags = '';
		        while (index < length) {
		            ch = source[index];
		            if (!isIdentifierPart(ch.charCodeAt(0))) {
		                break;
		            }
		
		            ++index;
		            if (ch === '\\' && index < length) {
		                ch = source[index];
		                if (ch === 'u') {
		                    ++index;
		                    restore = index;
		                    ch = scanHexEscape('u');
		                    if (ch) {
		                        flags += ch;
		                        for (str += '\\u'; restore < index; ++restore) {
		                            str += source[restore];
		                        }
		                    } else {
		                        index = restore;
		                        flags += 'u';
		                        str += '\\u';
		                    }
		                    throwErrorTolerant({}, Messages.UnexpectedToken, 'ILLEGAL');
		                } else {
		                    str += '\\';
		                    throwErrorTolerant({}, Messages.UnexpectedToken, 'ILLEGAL');
		                }
		            } else {
		                flags += ch;
		                str += ch;
		            }
		        }
		
		        return {
		            value: flags,
		            literal: str
		        };
		    }
		
		    function scanRegExp() {
		        var start, body, flags, value;
		
		        lookahead = null;
		        skipComment();
		        start = index;
		
		        body = scanRegExpBody();
		        flags = scanRegExpFlags();
		        value = testRegExp(body.value, flags.value);
		
		        if (extra.tokenize) {
		            return {
		                type: Token.RegularExpression,
		                value: value,
		                lineNumber: lineNumber,
		                lineStart: lineStart,
		                start: start,
		                end: index
		            };
		        }
		
		        return {
		            literal: body.literal + flags.literal,
		            value: value,
		            start: start,
		            end: index
		        };
		    }
		
		    function collectRegex() {
		        var pos, loc, regex, token;
		
		        skipComment();
		
		        pos = index;
		        loc = {
		            start: {
		                line: lineNumber,
		                column: index - lineStart
		            }
		        };
		
		        regex = scanRegExp();
		        loc.end = {
		            line: lineNumber,
		            column: index - lineStart
		        };
		
		        /* istanbul ignore next */
		        if (!extra.tokenize) {
		            // Pop the previous token, which is likely '/' or '/='
		            if (extra.tokens.length > 0) {
		                token = extra.tokens[extra.tokens.length - 1];
		                if (token.range[0] === pos && token.type === 'Punctuator') {
		                    if (token.value === '/' || token.value === '/=') {
		                        extra.tokens.pop();
		                    }
		                }
		            }
		
		            extra.tokens.push({
		                type: 'RegularExpression',
		                value: regex.literal,
		                range: [pos, index],
		                loc: loc
		            });
		        }
		
		        return regex;
		    }
		
		    function isIdentifierName(token) {
		        return token.type === Token.Identifier ||
		            token.type === Token.Keyword ||
		            token.type === Token.BooleanLiteral ||
		            token.type === Token.NullLiteral;
		    }
		
		    function advanceSlash() {
		        var prevToken,
		            checkToken;
		        // Using the following algorithm:
		        // https://github.com/mozilla/sweet.js/wiki/design
		        prevToken = extra.tokens[extra.tokens.length - 1];
		        if (!prevToken) {
		            // Nothing before that: it cannot be a division.
		            return collectRegex();
		        }
		        if (prevToken.type === 'Punctuator') {
		            if (prevToken.value === ']') {
		                return scanPunctuator();
		            }
		            if (prevToken.value === ')') {
		                checkToken = extra.tokens[extra.openParenToken - 1];
		                if (checkToken &&
		                        checkToken.type === 'Keyword' &&
		                        (checkToken.value === 'if' ||
		                         checkToken.value === 'while' ||
		                         checkToken.value === 'for' ||
		                         checkToken.value === 'with')) {
		                    return collectRegex();
		                }
		                return scanPunctuator();
		            }
		            if (prevToken.value === '}') {
		                // Dividing a function by anything makes little sense,
		                // but we have to check for that.
		                if (extra.tokens[extra.openCurlyToken - 3] &&
		                        extra.tokens[extra.openCurlyToken - 3].type === 'Keyword') {
		                    // Anonymous function.
		                    checkToken = extra.tokens[extra.openCurlyToken - 4];
		                    if (!checkToken) {
		                        return scanPunctuator();
		                    }
		                } else if (extra.tokens[extra.openCurlyToken - 4] &&
		                        extra.tokens[extra.openCurlyToken - 4].type === 'Keyword') {
		                    // Named function.
		                    checkToken = extra.tokens[extra.openCurlyToken - 5];
		                    if (!checkToken) {
		                        return collectRegex();
		                    }
		                } else {
		                    return scanPunctuator();
		                }
		                // checkToken determines whether the function is
		                // a declaration or an expression.
		                if (FnExprTokens.indexOf(checkToken.value) >= 0) {
		                    // It is an expression.
		                    return scanPunctuator();
		                }
		                // It is a declaration.
		                return collectRegex();
		            }
		            return collectRegex();
		        }
		        if (prevToken.type === 'Keyword') {
		            return collectRegex();
		        }
		        return scanPunctuator();
		    }
		
		    function advance() {
		        var ch;
		
		        skipComment();
		
		        if (index >= length) {
		            return {
		                type: Token.EOF,
		                lineNumber: lineNumber,
		                lineStart: lineStart,
		                start: index,
		                end: index
		            };
		        }
		
		        ch = source.charCodeAt(index);
		
		        if (isIdentifierStart(ch)) {
		            return scanIdentifier();
		        }
		
		        // Very common: ( and ) and ;
		        if (ch === 0x28 || ch === 0x29 || ch === 0x3B) {
		            return scanPunctuator();
		        }
		
		        // String literal starts with single quote (U+0027) or double quote (U+0022).
		        if (ch === 0x27 || ch === 0x22) {
		            return scanStringLiteral();
		        }
		
		
		        // Dot (.) U+002E can also start a floating-point number, hence the need
		        // to check the next character.
		        if (ch === 0x2E) {
		            if (isDecimalDigit(source.charCodeAt(index + 1))) {
		                return scanNumericLiteral();
		            }
		            return scanPunctuator();
		        }
		
		        if (isDecimalDigit(ch)) {
		            return scanNumericLiteral();
		        }
		
		        // Slash (/) U+002F can also start a regex.
		        if (extra.tokenize && ch === 0x2F) {
		            return advanceSlash();
		        }
		
		        return scanPunctuator();
		    }
		
		    function collectToken() {
		        var loc, token, value;
		
		        skipComment();
		        loc = {
		            start: {
		                line: lineNumber,
		                column: index - lineStart
		            }
		        };
		
		        token = advance();
		        loc.end = {
		            line: lineNumber,
		            column: index - lineStart
		        };
		
		        if (token.type !== Token.EOF) {
		            value = source.slice(token.start, token.end);
		            extra.tokens.push({
		                type: TokenName[token.type],
		                value: value,
		                range: [token.start, token.end],
		                loc: loc
		            });
		        }
		
		        return token;
		    }
		
		    function lex() {
		        var token;
		
		        token = lookahead;
		        index = token.end;
		        lineNumber = token.lineNumber;
		        lineStart = token.lineStart;
		
		        lookahead = (typeof extra.tokens !== 'undefined') ? collectToken() : advance();
		
		        index = token.end;
		        lineNumber = token.lineNumber;
		        lineStart = token.lineStart;
		
		        return token;
		    }
		
		    function peek() {
		        var pos, line, start;
		
		        pos = index;
		        line = lineNumber;
		        start = lineStart;
		        lookahead = (typeof extra.tokens !== 'undefined') ? collectToken() : advance();
		        index = pos;
		        lineNumber = line;
		        lineStart = start;
		    }
		
		    function Position() {
		        this.line = lineNumber;
		        this.column = index - lineStart;
		    }
		
		    function SourceLocation() {
		        this.start = new Position();
		        this.end = null;
		    }
		
		    function WrappingSourceLocation(startToken) {
		        if (startToken.type === Token.StringLiteral) {
		            this.start = {
		                line: startToken.startLineNumber,
		                column: startToken.start - startToken.startLineStart
		            };
		        } else {
		            this.start = {
		                line: startToken.lineNumber,
		                column: startToken.start - startToken.lineStart
		            };
		        }
		        this.end = null;
		    }
		
		    function Node() {
		        // Skip comment.
		        index = lookahead.start;
		        if (lookahead.type === Token.StringLiteral) {
		            lineNumber = lookahead.startLineNumber;
		            lineStart = lookahead.startLineStart;
		        } else {
		            lineNumber = lookahead.lineNumber;
		            lineStart = lookahead.lineStart;
		        }
		        if (extra.range) {
		            this.range = [index, 0];
		        }
		        if (extra.loc) {
		            this.loc = new SourceLocation();
		        }
		    }
		
		    function WrappingNode(startToken) {
		        if (extra.range) {
		            this.range = [startToken.start, 0];
		        }
		        if (extra.loc) {
		            this.loc = new WrappingSourceLocation(startToken);
		        }
		    }
		
		    WrappingNode.prototype = Node.prototype = {
		
		        processComment: function () {
		            var lastChild,
		                trailingComments,
		                bottomRight = extra.bottomRightStack,
		                last = bottomRight[bottomRight.length - 1];
		
		            if (this.type === Syntax.Program) {
		                if (this.body.length > 0) {
		                    return;
		                }
		            }
		
		            if (extra.trailingComments.length > 0) {
		                if (extra.trailingComments[0].range[0] >= this.range[1]) {
		                    trailingComments = extra.trailingComments;
		                    extra.trailingComments = [];
		                } else {
		                    extra.trailingComments.length = 0;
		                }
		            } else {
		                if (last && last.trailingComments && last.trailingComments[0].range[0] >= this.range[1]) {
		                    trailingComments = last.trailingComments;
		                    delete last.trailingComments;
		                }
		            }
		
		            // Eating the stack.
		            if (last) {
		                while (last && last.range[0] >= this.range[0]) {
		                    lastChild = last;
		                    last = bottomRight.pop();
		                }
		            }
		
		            if (lastChild) {
		                if (lastChild.leadingComments && lastChild.leadingComments[lastChild.leadingComments.length - 1].range[1] <= this.range[0]) {
		                    this.leadingComments = lastChild.leadingComments;
		                    lastChild.leadingComments = undefined;
		                }
		            } else if (extra.leadingComments.length > 0 && extra.leadingComments[extra.leadingComments.length - 1].range[1] <= this.range[0]) {
		                this.leadingComments = extra.leadingComments;
		                extra.leadingComments = [];
		            }
		
		
		            if (trailingComments) {
		                this.trailingComments = trailingComments;
		            }
		
		            bottomRight.push(this);
		        },
		
		        finish: function () {
		            if (extra.range) {
		                this.range[1] = index;
		            }
		            if (extra.loc) {
		                this.loc.end = new Position();
		                if (extra.source) {
		                    this.loc.source = extra.source;
		                }
		            }
		
		            if (extra.attachComment) {
		                this.processComment();
		            }
		        },
		
		        finishArrayExpression: function (elements) {
		            this.type = Syntax.ArrayExpression;
		            this.elements = elements;
		            this.finish();
		            return this;
		        },
		
		        finishArrowFunctionExpression: function (params, defaults, body, expression) {
		            this.type = Syntax.ArrowFunctionExpression;
		            this.id = null;
		            this.params = params;
		            this.defaults = defaults;
		            this.body = body;
		            this.rest = null;
		            this.generator = false;
		            this.expression = expression;
		            this.finish();
		            return this;
		        },
		
		        finishAssignmentExpression: function (operator, left, right) {
		            this.type = Syntax.AssignmentExpression;
		            this.operator = operator;
		            this.left = left;
		            this.right = right;
		            this.finish();
		            return this;
		        },
		
		        finishBinaryExpression: function (operator, left, right) {
		            this.type = (operator === '||' || operator === '&&') ? Syntax.LogicalExpression : Syntax.BinaryExpression;
		            this.operator = operator;
		            this.left = left;
		            this.right = right;
		            this.finish();
		            return this;
		        },
		
		        finishBlockStatement: function (body) {
		            this.type = Syntax.BlockStatement;
		            this.body = body;
		            this.finish();
		            return this;
		        },
		
		        finishBreakStatement: function (label) {
		            this.type = Syntax.BreakStatement;
		            this.label = label;
		            this.finish();
		            return this;
		        },
		
		        finishCallExpression: function (callee, args) {
		            this.type = Syntax.CallExpression;
		            this.callee = callee;
		            this.arguments = args;
		            this.finish();
		            return this;
		        },
		
		        finishCatchClause: function (param, body) {
		            this.type = Syntax.CatchClause;
		            this.param = param;
		            this.body = body;
		            this.finish();
		            return this;
		        },
		
		        finishConditionalExpression: function (test, consequent, alternate) {
		            this.type = Syntax.ConditionalExpression;
		            this.test = test;
		            this.consequent = consequent;
		            this.alternate = alternate;
		            this.finish();
		            return this;
		        },
		
		        finishContinueStatement: function (label) {
		            this.type = Syntax.ContinueStatement;
		            this.label = label;
		            this.finish();
		            return this;
		        },
		
		        finishDebuggerStatement: function () {
		            this.type = Syntax.DebuggerStatement;
		            this.finish();
		            return this;
		        },
		
		        finishDoWhileStatement: function (body, test) {
		            this.type = Syntax.DoWhileStatement;
		            this.body = body;
		            this.test = test;
		            this.finish();
		            return this;
		        },
		
		        finishEmptyStatement: function () {
		            this.type = Syntax.EmptyStatement;
		            this.finish();
		            return this;
		        },
		
		        finishExpressionStatement: function (expression) {
		            this.type = Syntax.ExpressionStatement;
		            this.expression = expression;
		            this.finish();
		            return this;
		        },
		
		        finishForStatement: function (init, test, update, body) {
		            this.type = Syntax.ForStatement;
		            this.init = init;
		            this.test = test;
		            this.update = update;
		            this.body = body;
		            this.finish();
		            return this;
		        },
		
		        finishForInStatement: function (left, right, body) {
		            this.type = Syntax.ForInStatement;
		            this.left = left;
		            this.right = right;
		            this.body = body;
		            this.each = false;
		            this.finish();
		            return this;
		        },
		
		        finishFunctionDeclaration: function (id, params, defaults, body) {
		            this.type = Syntax.FunctionDeclaration;
		            this.id = id;
		            this.params = params;
		            this.defaults = defaults;
		            this.body = body;
		            this.rest = null;
		            this.generator = false;
		            this.expression = false;
		            this.finish();
		            return this;
		        },
		
		        finishFunctionExpression: function (id, params, defaults, body) {
		            this.type = Syntax.FunctionExpression;
		            this.id = id;
		            this.params = params;
		            this.defaults = defaults;
		            this.body = body;
		            this.rest = null;
		            this.generator = false;
		            this.expression = false;
		            this.finish();
		            return this;
		        },
		
		        finishIdentifier: function (name) {
		            this.type = Syntax.Identifier;
		            this.name = name;
		            this.finish();
		            return this;
		        },
		
		        finishIfStatement: function (test, consequent, alternate) {
		            this.type = Syntax.IfStatement;
		            this.test = test;
		            this.consequent = consequent;
		            this.alternate = alternate;
		            this.finish();
		            return this;
		        },
		
		        finishLabeledStatement: function (label, body) {
		            this.type = Syntax.LabeledStatement;
		            this.label = label;
		            this.body = body;
		            this.finish();
		            return this;
		        },
		
		        finishLiteral: function (token) {
		            this.type = Syntax.Literal;
		            this.value = token.value;
		            this.raw = source.slice(token.start, token.end);
		            this.finish();
		            return this;
		        },
		
		        finishMemberExpression: function (accessor, object, property) {
		            this.type = Syntax.MemberExpression;
		            this.computed = accessor === '[';
		            this.object = object;
		            this.property = property;
		            this.finish();
		            return this;
		        },
		
		        finishNewExpression: function (callee, args) {
		            this.type = Syntax.NewExpression;
		            this.callee = callee;
		            this.arguments = args;
		            this.finish();
		            return this;
		        },
		
		        finishObjectExpression: function (properties) {
		            this.type = Syntax.ObjectExpression;
		            this.properties = properties;
		            this.finish();
		            return this;
		        },
		
		        finishPostfixExpression: function (operator, argument) {
		            this.type = Syntax.UpdateExpression;
		            this.operator = operator;
		            this.argument = argument;
		            this.prefix = false;
		            this.finish();
		            return this;
		        },
		
		        finishProgram: function (body) {
		            this.type = Syntax.Program;
		            this.body = body;
		            this.finish();
		            return this;
		        },
		
		        finishProperty: function (kind, key, value) {
		            this.type = Syntax.Property;
		            this.key = key;
		            this.value = value;
		            this.kind = kind;
		            this.finish();
		            return this;
		        },
		
		        finishReturnStatement: function (argument) {
		            this.type = Syntax.ReturnStatement;
		            this.argument = argument;
		            this.finish();
		            return this;
		        },
		
		        finishSequenceExpression: function (expressions) {
		            this.type = Syntax.SequenceExpression;
		            this.expressions = expressions;
		            this.finish();
		            return this;
		        },
		
		        finishSwitchCase: function (test, consequent) {
		            this.type = Syntax.SwitchCase;
		            this.test = test;
		            this.consequent = consequent;
		            this.finish();
		            return this;
		        },
		
		        finishSwitchStatement: function (discriminant, cases) {
		            this.type = Syntax.SwitchStatement;
		            this.discriminant = discriminant;
		            this.cases = cases;
		            this.finish();
		            return this;
		        },
		
		        finishThisExpression: function () {
		            this.type = Syntax.ThisExpression;
		            this.finish();
		            return this;
		        },
		
		        finishThrowStatement: function (argument) {
		            this.type = Syntax.ThrowStatement;
		            this.argument = argument;
		            this.finish();
		            return this;
		        },
		
		        finishTryStatement: function (block, guardedHandlers, handlers, finalizer) {
		            this.type = Syntax.TryStatement;
		            this.block = block;
		            this.guardedHandlers = guardedHandlers;
		            this.handlers = handlers;
		            this.finalizer = finalizer;
		            this.finish();
		            return this;
		        },
		
		        finishUnaryExpression: function (operator, argument) {
		            this.type = (operator === '++' || operator === '--') ? Syntax.UpdateExpression : Syntax.UnaryExpression;
		            this.operator = operator;
		            this.argument = argument;
		            this.prefix = true;
		            this.finish();
		            return this;
		        },
		
		        finishVariableDeclaration: function (declarations, kind) {
		            this.type = Syntax.VariableDeclaration;
		            this.declarations = declarations;
		            this.kind = kind;
		            this.finish();
		            return this;
		        },
		
		        finishVariableDeclarator: function (id, init) {
		            this.type = Syntax.VariableDeclarator;
		            this.id = id;
		            this.init = init;
		            this.finish();
		            return this;
		        },
		
		        finishWhileStatement: function (test, body) {
		            this.type = Syntax.WhileStatement;
		            this.test = test;
		            this.body = body;
		            this.finish();
		            return this;
		        },
		
		        finishWithStatement: function (object, body) {
		            this.type = Syntax.WithStatement;
		            this.object = object;
		            this.body = body;
		            this.finish();
		            return this;
		        }
		    };
		
		    // Return true if there is a line terminator before the next token.
		
		    function peekLineTerminator() {
		        var pos, line, start, found;
		
		        pos = index;
		        line = lineNumber;
		        start = lineStart;
		        skipComment();
		        found = lineNumber !== line;
		        index = pos;
		        lineNumber = line;
		        lineStart = start;
		
		        return found;
		    }
		
		    // Throw an exception
		
		    function throwError(token, messageFormat) {
		        var error,
		            args = Array.prototype.slice.call(arguments, 2),
		            msg = messageFormat.replace(
		                /%(\d)/g,
		                function (whole, index) {
		                    assert(index < args.length, 'Message reference must be in range');
		                    return args[index];
		                }
		            );
		
		        if (typeof token.lineNumber === 'number') {
		            error = new Error('Line ' + token.lineNumber + ': ' + msg);
		            error.index = token.start;
		            error.lineNumber = token.lineNumber;
		            error.column = token.start - lineStart + 1;
		        } else {
		            error = new Error('Line ' + lineNumber + ': ' + msg);
		            error.index = index;
		            error.lineNumber = lineNumber;
		            error.column = index - lineStart + 1;
		        }
		
		        error.description = msg;
		        throw error;
		    }
		
		    function throwErrorTolerant() {
		        try {
		            throwError.apply(null, arguments);
		        } catch (e) {
		            if (extra.errors) {
		                extra.errors.push(e);
		            } else {
		                throw e;
		            }
		        }
		    }
		
		
		    // Throw an exception because of the token.
		
		    function throwUnexpected(token) {
		        if (token.type === Token.EOF) {
		            throwError(token, Messages.UnexpectedEOS);
		        }
		
		        if (token.type === Token.NumericLiteral) {
		            throwError(token, Messages.UnexpectedNumber);
		        }
		
		        if (token.type === Token.StringLiteral) {
		            throwError(token, Messages.UnexpectedString);
		        }
		
		        if (token.type === Token.Identifier) {
		            throwError(token, Messages.UnexpectedIdentifier);
		        }
		
		        if (token.type === Token.Keyword) {
		            if (isFutureReservedWord(token.value)) {
		                throwError(token, Messages.UnexpectedReserved);
		            } else if (strict && isStrictModeReservedWord(token.value)) {
		                throwErrorTolerant(token, Messages.StrictReservedWord);
		                return;
		            }
		            throwError(token, Messages.UnexpectedToken, token.value);
		        }
		
		        // BooleanLiteral, NullLiteral, or Punctuator.
		        throwError(token, Messages.UnexpectedToken, token.value);
		    }
		
		    // Expect the next token to match the specified punctuator.
		    // If not, an exception will be thrown.
		
		    function expect(value) {
		        var token = lex();
		        if (token.type !== Token.Punctuator || token.value !== value) {
		            throwUnexpected(token);
		        }
		    }
		
		    /**
		     * @name expectTolerant
		     * @description Quietly expect the given token value when in tolerant mode, otherwise delegates
		     * to <code>expect(value)</code>
		     * @param {String} value The value we are expecting the lookahead token to have
		     * @since 2.0
		     */
		    function expectTolerant(value) {
		        if (extra.errors) {
		            var token = lookahead;
		            if (token.type !== Token.Punctuator && token.value !== value) {
		                throwErrorTolerant(token, Messages.UnexpectedToken, token.value);
		            } else {
		                lex();
		            }
		        } else {
		            expect(value);
		        }
		    }
		
		    // Expect the next token to match the specified keyword.
		    // If not, an exception will be thrown.
		
		    function expectKeyword(keyword) {
		        var token = lex();
		        if (token.type !== Token.Keyword || token.value !== keyword) {
		            throwUnexpected(token);
		        }
		    }
		
		    // Return true if the next token matches the specified punctuator.
		
		    function match(value) {
		        return lookahead.type === Token.Punctuator && lookahead.value === value;
		    }
		
		    // Return true if the next token matches the specified keyword
		
		    function matchKeyword(keyword) {
		        return lookahead.type === Token.Keyword && lookahead.value === keyword;
		    }
		
		    // Return true if the next token is an assignment operator
		
		    function matchAssign() {
		        var op;
		
		        if (lookahead.type !== Token.Punctuator) {
		            return false;
		        }
		        op = lookahead.value;
		        return op === '=' ||
		            op === '*=' ||
		            op === '/=' ||
		            op === '%=' ||
		            op === '+=' ||
		            op === '-=' ||
		            op === '<<=' ||
		            op === '>>=' ||
		            op === '>>>=' ||
		            op === '&=' ||
		            op === '^=' ||
		            op === '|=';
		    }
		
		    function consumeSemicolon() {
		        var line;
		
		        // Catch the very common case first: immediately a semicolon (U+003B).
		        if (source.charCodeAt(index) === 0x3B || match(';')) {
		            lex();
		            return;
		        }
		
		        line = lineNumber;
		        skipComment();
		        if (lineNumber !== line) {
		            return;
		        }
		
		        if (lookahead.type !== Token.EOF && !match('}')) {
		            throwUnexpected(lookahead);
		        }
		    }
		
		    // Return true if provided expression is LeftHandSideExpression
		
		    function isLeftHandSide(expr) {
		        return expr.type === Syntax.Identifier || expr.type === Syntax.MemberExpression;
		    }
		
		    // 11.1.4 Array Initialiser
		
		    function parseArrayInitialiser() {
		        var elements = [], node = new Node();
		
		        expect('[');
		
		        while (!match(']')) {
		            if (match(',')) {
		                lex();
		                elements.push(null);
		            } else {
		                elements.push(parseAssignmentExpression());
		
		                if (!match(']')) {
		                    expect(',');
		                }
		            }
		        }
		
		        lex();
		
		        return node.finishArrayExpression(elements);
		    }
		
		    // 11.1.5 Object Initialiser
		
		    function parsePropertyFunction(param, first) {
		        var previousStrict, body, node = new Node();
		
		        previousStrict = strict;
		        body = parseFunctionSourceElements();
		        if (first && strict && isRestrictedWord(param[0].name)) {
		            throwErrorTolerant(first, Messages.StrictParamName);
		        }
		        strict = previousStrict;
		        return node.finishFunctionExpression(null, param, [], body);
		    }
		
		    function parseObjectPropertyKey() {
		        var token, node = new Node();
		
		        token = lex();
		
		        // Note: This function is called only from parseObjectProperty(), where
		        // EOF and Punctuator tokens are already filtered out.
		
		        if (token.type === Token.StringLiteral || token.type === Token.NumericLiteral) {
		            if (strict && token.octal) {
		                throwErrorTolerant(token, Messages.StrictOctalLiteral);
		            }
		            return node.finishLiteral(token);
		        }
		
		        return node.finishIdentifier(token.value);
		    }
		
		    function parseObjectProperty() {
		        var token, key, id, value, param, node = new Node();
		
		        token = lookahead;
		
		        if (token.type === Token.Identifier) {
		
		            id = parseObjectPropertyKey();
		
		            // Property Assignment: Getter and Setter.
		
		            if (token.value === 'get' && !match(':')) {
		                key = parseObjectPropertyKey();
		                expect('(');
		                expect(')');
		                value = parsePropertyFunction([]);
		                return node.finishProperty('get', key, value);
		            }
		            if (token.value === 'set' && !match(':')) {
		                key = parseObjectPropertyKey();
		                expect('(');
		                token = lookahead;
		                if (token.type !== Token.Identifier) {
		                    expect(')');
		                    throwErrorTolerant(token, Messages.UnexpectedToken, token.value);
		                    value = parsePropertyFunction([]);
		                } else {
		                    param = [ parseVariableIdentifier() ];
		                    expect(')');
		                    value = parsePropertyFunction(param, token);
		                }
		                return node.finishProperty('set', key, value);
		            }
		            expect(':');
		            value = parseAssignmentExpression();
		            return node.finishProperty('init', id, value);
		        }
		        if (token.type === Token.EOF || token.type === Token.Punctuator) {
		            throwUnexpected(token);
		        } else {
		            key = parseObjectPropertyKey();
		            expect(':');
		            value = parseAssignmentExpression();
		            return node.finishProperty('init', key, value);
		        }
		    }
		
		    function parseObjectInitialiser() {
		        var properties = [], token, property, name, key, kind, map = {}, toString = String, node = new Node();
		
		        expect('{');
		
		        while (!match('}')) {
		            property = parseObjectProperty();
		
		            if (property.key.type === Syntax.Identifier) {
		                name = property.key.name;
		            } else {
		                name = toString(property.key.value);
		            }
		            kind = (property.kind === 'init') ? PropertyKind.Data : (property.kind === 'get') ? PropertyKind.Get : PropertyKind.Set;
		
		            key = '$' + name;
		            if (Object.prototype.hasOwnProperty.call(map, key)) {
		                if (map[key] === PropertyKind.Data) {
		                    if (strict && kind === PropertyKind.Data) {
		                        throwErrorTolerant({}, Messages.StrictDuplicateProperty);
		                    } else if (kind !== PropertyKind.Data) {
		                        throwErrorTolerant({}, Messages.AccessorDataProperty);
		                    }
		                } else {
		                    if (kind === PropertyKind.Data) {
		                        throwErrorTolerant({}, Messages.AccessorDataProperty);
		                    } else if (map[key] & kind) {
		                        throwErrorTolerant({}, Messages.AccessorGetSet);
		                    }
		                }
		                map[key] |= kind;
		            } else {
		                map[key] = kind;
		            }
		
		            properties.push(property);
		
		            if (!match('}')) {
		                expectTolerant(',');
		            }
		        }
		
		        expect('}');
		
		        return node.finishObjectExpression(properties);
		    }
		
		    // 11.1.6 The Grouping Operator
		
		    function parseGroupExpression() {
		        var expr;
		
		        expect('(');
		
		        if (match(')')) {
		            lex();
		            return PlaceHolders.ArrowParameterPlaceHolder;
		        }
		
		        ++state.parenthesisCount;
		
		        expr = parseExpression();
		
		        expect(')');
		
		        return expr;
		    }
		
		
		    // 11.1 Primary Expressions
		
		    function parsePrimaryExpression() {
		        var type, token, expr, node;
		
		        if (match('(')) {
		            return parseGroupExpression();
		        }
		
		        if (match('[')) {
		            return parseArrayInitialiser();
		        }
		
		        if (match('{')) {
		            return parseObjectInitialiser();
		        }
		
		        type = lookahead.type;
		        node = new Node();
		
		        if (type === Token.Identifier) {
		            expr =  node.finishIdentifier(lex().value);
		        } else if (type === Token.StringLiteral || type === Token.NumericLiteral) {
		            if (strict && lookahead.octal) {
		                throwErrorTolerant(lookahead, Messages.StrictOctalLiteral);
		            }
		            expr = node.finishLiteral(lex());
		        } else if (type === Token.Keyword) {
		            if (matchKeyword('function')) {
		                return parseFunctionExpression();
		            }
		            if (matchKeyword('this')) {
		                lex();
		                expr = node.finishThisExpression();
		            } else {
		                throwUnexpected(lex());
		            }
		        } else if (type === Token.BooleanLiteral) {
		            token = lex();
		            token.value = (token.value === 'true');
		            expr = node.finishLiteral(token);
		        } else if (type === Token.NullLiteral) {
		            token = lex();
		            token.value = null;
		            expr = node.finishLiteral(token);
		        } else if (match('/') || match('/=')) {
		            if (typeof extra.tokens !== 'undefined') {
		                expr = node.finishLiteral(collectRegex());
		            } else {
		                expr = node.finishLiteral(scanRegExp());
		            }
		            peek();
		        } else {
		            throwUnexpected(lex());
		        }
		
		        return expr;
		    }
		
		    // 11.2 Left-Hand-Side Expressions
		
		    function parseArguments() {
		        var args = [];
		
		        expect('(');
		
		        if (!match(')')) {
		            while (index < length) {
		                args.push(parseAssignmentExpression());
		                if (match(')')) {
		                    break;
		                }
		                expectTolerant(',');
		            }
		        }
		
		        expect(')');
		
		        return args;
		    }
		
		    function parseNonComputedProperty() {
		        var token, node = new Node();
		
		        token = lex();
		
		        if (!isIdentifierName(token)) {
		            throwUnexpected(token);
		        }
		
		        return node.finishIdentifier(token.value);
		    }
		
		    function parseNonComputedMember() {
		        expect('.');
		
		        return parseNonComputedProperty();
		    }
		
		    function parseComputedMember() {
		        var expr;
		
		        expect('[');
		
		        expr = parseExpression();
		
		        expect(']');
		
		        return expr;
		    }
		
		    function parseNewExpression() {
		        var callee, args, node = new Node();
		
		        expectKeyword('new');
		        callee = parseLeftHandSideExpression();
		        args = match('(') ? parseArguments() : [];
		
		        return node.finishNewExpression(callee, args);
		    }
		
		    function parseLeftHandSideExpressionAllowCall() {
		        var expr, args, property, startToken, previousAllowIn = state.allowIn;
		
		        startToken = lookahead;
		        state.allowIn = true;
		        expr = matchKeyword('new') ? parseNewExpression() : parsePrimaryExpression();
		
		        for (;;) {
		            if (match('.')) {
		                property = parseNonComputedMember();
		                expr = new WrappingNode(startToken).finishMemberExpression('.', expr, property);
		            } else if (match('(')) {
		                args = parseArguments();
		                expr = new WrappingNode(startToken).finishCallExpression(expr, args);
		            } else if (match('[')) {
		                property = parseComputedMember();
		                expr = new WrappingNode(startToken).finishMemberExpression('[', expr, property);
		            } else {
		                break;
		            }
		        }
		        state.allowIn = previousAllowIn;
		
		        return expr;
		    }
		
		    function parseLeftHandSideExpression() {
		        var expr, property, startToken;
		        assert(state.allowIn, 'callee of new expression always allow in keyword.');
		
		        startToken = lookahead;
		
		        expr = matchKeyword('new') ? parseNewExpression() : parsePrimaryExpression();
		
		        for (;;) {
		            if (match('[')) {
		                property = parseComputedMember();
		                expr = new WrappingNode(startToken).finishMemberExpression('[', expr, property);
		            } else if (match('.')) {
		                property = parseNonComputedMember();
		                expr = new WrappingNode(startToken).finishMemberExpression('.', expr, property);
		            } else {
		                break;
		            }
		        }
		        return expr;
		    }
		
		    // 11.3 Postfix Expressions
		
		    function parsePostfixExpression() {
		        var expr, token, startToken = lookahead;
		
		        expr = parseLeftHandSideExpressionAllowCall();
		
		        if (lookahead.type === Token.Punctuator) {
		            if ((match('++') || match('--')) && !peekLineTerminator()) {
		                // 11.3.1, 11.3.2
		                if (strict && expr.type === Syntax.Identifier && isRestrictedWord(expr.name)) {
		                    throwErrorTolerant({}, Messages.StrictLHSPostfix);
		                }
		
		                if (!isLeftHandSide(expr)) {
		                    throwErrorTolerant({}, Messages.InvalidLHSInAssignment);
		                }
		
		                token = lex();
		                expr = new WrappingNode(startToken).finishPostfixExpression(token.value, expr);
		            }
		        }
		
		        return expr;
		    }
		
		    // 11.4 Unary Operators
		
		    function parseUnaryExpression() {
		        var token, expr, startToken;
		
		        if (lookahead.type !== Token.Punctuator && lookahead.type !== Token.Keyword) {
		            expr = parsePostfixExpression();
		        } else if (match('++') || match('--')) {
		            startToken = lookahead;
		            token = lex();
		            expr = parseUnaryExpression();
		            // 11.4.4, 11.4.5
		            if (strict && expr.type === Syntax.Identifier && isRestrictedWord(expr.name)) {
		                throwErrorTolerant({}, Messages.StrictLHSPrefix);
		            }
		
		            if (!isLeftHandSide(expr)) {
		                throwErrorTolerant({}, Messages.InvalidLHSInAssignment);
		            }
		
		            expr = new WrappingNode(startToken).finishUnaryExpression(token.value, expr);
		        } else if (match('+') || match('-') || match('~') || match('!')) {
		            startToken = lookahead;
		            token = lex();
		            expr = parseUnaryExpression();
		            expr = new WrappingNode(startToken).finishUnaryExpression(token.value, expr);
		        } else if (matchKeyword('delete') || matchKeyword('void') || matchKeyword('typeof')) {
		            startToken = lookahead;
		            token = lex();
		            expr = parseUnaryExpression();
		            expr = new WrappingNode(startToken).finishUnaryExpression(token.value, expr);
		            if (strict && expr.operator === 'delete' && expr.argument.type === Syntax.Identifier) {
		                throwErrorTolerant({}, Messages.StrictDelete);
		            }
		        } else {
		            expr = parsePostfixExpression();
		        }
		
		        return expr;
		    }
		
		    function binaryPrecedence(token, allowIn) {
		        var prec = 0;
		
		        if (token.type !== Token.Punctuator && token.type !== Token.Keyword) {
		            return 0;
		        }
		
		        switch (token.value) {
		        case '||':
		            prec = 1;
		            break;
		
		        case '&&':
		            prec = 2;
		            break;
		
		        case '|':
		            prec = 3;
		            break;
		
		        case '^':
		            prec = 4;
		            break;
		
		        case '&':
		            prec = 5;
		            break;
		
		        case '==':
		        case '!=':
		        case '===':
		        case '!==':
		            prec = 6;
		            break;
		
		        case '<':
		        case '>':
		        case '<=':
		        case '>=':
		        case 'instanceof':
		            prec = 7;
		            break;
		
		        case 'in':
		            prec = allowIn ? 7 : 0;
		            break;
		
		        case '<<':
		        case '>>':
		        case '>>>':
		            prec = 8;
		            break;
		
		        case '+':
		        case '-':
		            prec = 9;
		            break;
		
		        case '*':
		        case '/':
		        case '%':
		            prec = 11;
		            break;
		
		        default:
		            break;
		        }
		
		        return prec;
		    }
		
		    // 11.5 Multiplicative Operators
		    // 11.6 Additive Operators
		    // 11.7 Bitwise Shift Operators
		    // 11.8 Relational Operators
		    // 11.9 Equality Operators
		    // 11.10 Binary Bitwise Operators
		    // 11.11 Binary Logical Operators
		
		    function parseBinaryExpression() {
		        var marker, markers, expr, token, prec, stack, right, operator, left, i;
		
		        marker = lookahead;
		        left = parseUnaryExpression();
		        if (left === PlaceHolders.ArrowParameterPlaceHolder) {
		            return left;
		        }
		
		        token = lookahead;
		        prec = binaryPrecedence(token, state.allowIn);
		        if (prec === 0) {
		            return left;
		        }
		        token.prec = prec;
		        lex();
		
		        markers = [marker, lookahead];
		        right = parseUnaryExpression();
		
		        stack = [left, token, right];
		
		        while ((prec = binaryPrecedence(lookahead, state.allowIn)) > 0) {
		
		            // Reduce: make a binary expression from the three topmost entries.
		            while ((stack.length > 2) && (prec <= stack[stack.length - 2].prec)) {
		                right = stack.pop();
		                operator = stack.pop().value;
		                left = stack.pop();
		                markers.pop();
		                expr = new WrappingNode(markers[markers.length - 1]).finishBinaryExpression(operator, left, right);
		                stack.push(expr);
		            }
		
		            // Shift.
		            token = lex();
		            token.prec = prec;
		            stack.push(token);
		            markers.push(lookahead);
		            expr = parseUnaryExpression();
		            stack.push(expr);
		        }
		
		        // Final reduce to clean-up the stack.
		        i = stack.length - 1;
		        expr = stack[i];
		        markers.pop();
		        while (i > 1) {
		            expr = new WrappingNode(markers.pop()).finishBinaryExpression(stack[i - 1].value, stack[i - 2], expr);
		            i -= 2;
		        }
		
		        return expr;
		    }
		
		
		    // 11.12 Conditional Operator
		
		    function parseConditionalExpression() {
		        var expr, previousAllowIn, consequent, alternate, startToken;
		
		        startToken = lookahead;
		
		        expr = parseBinaryExpression();
		        if (expr === PlaceHolders.ArrowParameterPlaceHolder) {
		            return expr;
		        }
		        if (match('?')) {
		            lex();
		            previousAllowIn = state.allowIn;
		            state.allowIn = true;
		            consequent = parseAssignmentExpression();
		            state.allowIn = previousAllowIn;
		            expect(':');
		            alternate = parseAssignmentExpression();
		
		            expr = new WrappingNode(startToken).finishConditionalExpression(expr, consequent, alternate);
		        }
		
		        return expr;
		    }
		
		    // [ES6] 14.2 Arrow Function
		
		    function parseConciseBody() {
		        if (match('{')) {
		            return parseFunctionSourceElements();
		        }
		        return parseAssignmentExpression();
		    }
		
		    function reinterpretAsCoverFormalsList(expressions) {
		        var i, len, param, params, defaults, defaultCount, options, rest;
		
		        params = [];
		        defaults = [];
		        defaultCount = 0;
		        rest = null;
		        options = {
		            paramSet: {}
		        };
		
		        for (i = 0, len = expressions.length; i < len; i += 1) {
		            param = expressions[i];
		            if (param.type === Syntax.Identifier) {
		                params.push(param);
		                defaults.push(null);
		                validateParam(options, param, param.name);
		            } else if (param.type === Syntax.AssignmentExpression) {
		                params.push(param.left);
		                defaults.push(param.right);
		                ++defaultCount;
		                validateParam(options, param.left, param.left.name);
		            } else {
		                return null;
		            }
		        }
		
		        if (options.message === Messages.StrictParamDupe) {
		            throwError(
		                strict ? options.stricted : options.firstRestricted,
		                options.message
		            );
		        }
		
		        if (defaultCount === 0) {
		            defaults = [];
		        }
		
		        return {
		            params: params,
		            defaults: defaults,
		            rest: rest,
		            stricted: options.stricted,
		            firstRestricted: options.firstRestricted,
		            message: options.message
		        };
		    }
		
		    function parseArrowFunctionExpression(options, node) {
		        var previousStrict, body;
		
		        expect('=>');
		        previousStrict = strict;
		
		        body = parseConciseBody();
		
		        if (strict && options.firstRestricted) {
		            throwError(options.firstRestricted, options.message);
		        }
		        if (strict && options.stricted) {
		            throwErrorTolerant(options.stricted, options.message);
		        }
		
		        strict = previousStrict;
		
		        return node.finishArrowFunctionExpression(options.params, options.defaults, body, body.type !== Syntax.BlockStatement);
		    }
		
		    // 11.13 Assignment Operators
		
		    function parseAssignmentExpression() {
		        var oldParenthesisCount, token, expr, right, list, startToken;
		
		        oldParenthesisCount = state.parenthesisCount;
		
		        startToken = lookahead;
		        token = lookahead;
		
		        expr = parseConditionalExpression();
		
		        if (expr === PlaceHolders.ArrowParameterPlaceHolder || match('=>')) {
		            if (state.parenthesisCount === oldParenthesisCount ||
		                    state.parenthesisCount === (oldParenthesisCount + 1)) {
		                if (expr.type === Syntax.Identifier) {
		                    list = reinterpretAsCoverFormalsList([ expr ]);
		                } else if (expr.type === Syntax.AssignmentExpression) {
		                    list = reinterpretAsCoverFormalsList([ expr ]);
		                } else if (expr.type === Syntax.SequenceExpression) {
		                    list = reinterpretAsCoverFormalsList(expr.expressions);
		                } else if (expr === PlaceHolders.ArrowParameterPlaceHolder) {
		                    list = reinterpretAsCoverFormalsList([]);
		                }
		                if (list) {
		                    return parseArrowFunctionExpression(list, new WrappingNode(startToken));
		                }
		            }
		        }
		
		        if (matchAssign()) {
		            // LeftHandSideExpression
		            if (!isLeftHandSide(expr)) {
		                throwErrorTolerant({}, Messages.InvalidLHSInAssignment);
		            }
		
		            // 11.13.1
		            if (strict && expr.type === Syntax.Identifier && isRestrictedWord(expr.name)) {
		                throwErrorTolerant(token, Messages.StrictLHSAssignment);
		            }
		
		            token = lex();
		            right = parseAssignmentExpression();
		            expr = new WrappingNode(startToken).finishAssignmentExpression(token.value, expr, right);
		        }
		
		        return expr;
		    }
		
		    // 11.14 Comma Operator
		
		    function parseExpression() {
		        var expr, startToken = lookahead, expressions;
		
		        expr = parseAssignmentExpression();
		
		        if (match(',')) {
		            expressions = [expr];
		
		            while (index < length) {
		                if (!match(',')) {
		                    break;
		                }
		                lex();
		                expressions.push(parseAssignmentExpression());
		            }
		
		            expr = new WrappingNode(startToken).finishSequenceExpression(expressions);
		        }
		
		        return expr;
		    }
		
		    // 12.1 Block
		
		    function parseStatementList() {
		        var list = [],
		            statement;
		
		        while (index < length) {
		            if (match('}')) {
		                break;
		            }
		            statement = parseSourceElement();
		            if (typeof statement === 'undefined') {
		                break;
		            }
		            list.push(statement);
		        }
		
		        return list;
		    }
		
		    function parseBlock() {
		        var block, node = new Node();
		
		        expect('{');
		
		        block = parseStatementList();
		
		        expect('}');
		
		        return node.finishBlockStatement(block);
		    }
		
		    // 12.2 Variable Statement
		
		    function parseVariableIdentifier() {
		        var token, node = new Node();
		
		        token = lex();
		
		        if (token.type !== Token.Identifier) {
		            throwUnexpected(token);
		        }
		
		        return node.finishIdentifier(token.value);
		    }
		
		    function parseVariableDeclaration(kind) {
		        var init = null, id, node = new Node();
		
		        id = parseVariableIdentifier();
		
		        // 12.2.1
		        if (strict && isRestrictedWord(id.name)) {
		            throwErrorTolerant({}, Messages.StrictVarName);
		        }
		
		        if (kind === 'const') {
		            expect('=');
		            init = parseAssignmentExpression();
		        } else if (match('=')) {
		            lex();
		            init = parseAssignmentExpression();
		        }
		
		        return node.finishVariableDeclarator(id, init);
		    }
		
		    function parseVariableDeclarationList(kind) {
		        var list = [];
		
		        do {
		            list.push(parseVariableDeclaration(kind));
		            if (!match(',')) {
		                break;
		            }
		            lex();
		        } while (index < length);
		
		        return list;
		    }
		
		    function parseVariableStatement(node) {
		        var declarations;
		
		        expectKeyword('var');
		
		        declarations = parseVariableDeclarationList();
		
		        consumeSemicolon();
		
		        return node.finishVariableDeclaration(declarations, 'var');
		    }
		
		    // kind may be `const` or `let`
		    // Both are experimental and not in the specification yet.
		    // see http://wiki.ecmascript.org/doku.php?id=harmony:const
		    // and http://wiki.ecmascript.org/doku.php?id=harmony:let
		    function parseConstLetDeclaration(kind) {
		        var declarations, node = new Node();
		
		        expectKeyword(kind);
		
		        declarations = parseVariableDeclarationList(kind);
		
		        consumeSemicolon();
		
		        return node.finishVariableDeclaration(declarations, kind);
		    }
		
		    // 12.3 Empty Statement
		
		    function parseEmptyStatement() {
		        var node = new Node();
		        expect(';');
		        return node.finishEmptyStatement();
		    }
		
		    // 12.4 Expression Statement
		
		    function parseExpressionStatement(node) {
		        var expr = parseExpression();
		        consumeSemicolon();
		        return node.finishExpressionStatement(expr);
		    }
		
		    // 12.5 If statement
		
		    function parseIfStatement(node) {
		        var test, consequent, alternate;
		
		        expectKeyword('if');
		
		        expect('(');
		
		        test = parseExpression();
		
		        expect(')');
		
		        consequent = parseStatement();
		
		        if (matchKeyword('else')) {
		            lex();
		            alternate = parseStatement();
		        } else {
		            alternate = null;
		        }
		
		        return node.finishIfStatement(test, consequent, alternate);
		    }
		
		    // 12.6 Iteration Statements
		
		    function parseDoWhileStatement(node) {
		        var body, test, oldInIteration;
		
		        expectKeyword('do');
		
		        oldInIteration = state.inIteration;
		        state.inIteration = true;
		
		        body = parseStatement();
		
		        state.inIteration = oldInIteration;
		
		        expectKeyword('while');
		
		        expect('(');
		
		        test = parseExpression();
		
		        expect(')');
		
		        if (match(';')) {
		            lex();
		        }
		
		        return node.finishDoWhileStatement(body, test);
		    }
		
		    function parseWhileStatement(node) {
		        var test, body, oldInIteration;
		
		        expectKeyword('while');
		
		        expect('(');
		
		        test = parseExpression();
		
		        expect(')');
		
		        oldInIteration = state.inIteration;
		        state.inIteration = true;
		
		        body = parseStatement();
		
		        state.inIteration = oldInIteration;
		
		        return node.finishWhileStatement(test, body);
		    }
		
		    function parseForVariableDeclaration() {
		        var token, declarations, node = new Node();
		
		        token = lex();
		        declarations = parseVariableDeclarationList();
		
		        return node.finishVariableDeclaration(declarations, token.value);
		    }
		
		    function parseForStatement(node) {
		        var init, test, update, left, right, body, oldInIteration, previousAllowIn = state.allowIn;
		
		        init = test = update = null;
		
		        expectKeyword('for');
		
		        expect('(');
		
		        if (match(';')) {
		            lex();
		        } else {
		            if (matchKeyword('var') || matchKeyword('let')) {
		                state.allowIn = false;
		                init = parseForVariableDeclaration();
		                state.allowIn = previousAllowIn;
		
		                if (init.declarations.length === 1 && matchKeyword('in')) {
		                    lex();
		                    left = init;
		                    right = parseExpression();
		                    init = null;
		                }
		            } else {
		                state.allowIn = false;
		                init = parseExpression();
		                state.allowIn = previousAllowIn;
		
		                if (matchKeyword('in')) {
		                    // LeftHandSideExpression
		                    if (!isLeftHandSide(init)) {
		                        throwErrorTolerant({}, Messages.InvalidLHSInForIn);
		                    }
		
		                    lex();
		                    left = init;
		                    right = parseExpression();
		                    init = null;
		                }
		            }
		
		            if (typeof left === 'undefined') {
		                expect(';');
		            }
		        }
		
		        if (typeof left === 'undefined') {
		
		            if (!match(';')) {
		                test = parseExpression();
		            }
		            expect(';');
		
		            if (!match(')')) {
		                update = parseExpression();
		            }
		        }
		
		        expect(')');
		
		        oldInIteration = state.inIteration;
		        state.inIteration = true;
		
		        body = parseStatement();
		
		        state.inIteration = oldInIteration;
		
		        return (typeof left === 'undefined') ?
		                node.finishForStatement(init, test, update, body) :
		                node.finishForInStatement(left, right, body);
		    }
		
		    // 12.7 The continue statement
		
		    function parseContinueStatement(node) {
		        var label = null, key;
		
		        expectKeyword('continue');
		
		        // Optimize the most common form: 'continue;'.
		        if (source.charCodeAt(index) === 0x3B) {
		            lex();
		
		            if (!state.inIteration) {
		                throwError({}, Messages.IllegalContinue);
		            }
		
		            return node.finishContinueStatement(null);
		        }
		
		        if (peekLineTerminator()) {
		            if (!state.inIteration) {
		                throwError({}, Messages.IllegalContinue);
		            }
		
		            return node.finishContinueStatement(null);
		        }
		
		        if (lookahead.type === Token.Identifier) {
		            label = parseVariableIdentifier();
		
		            key = '$' + label.name;
		            if (!Object.prototype.hasOwnProperty.call(state.labelSet, key)) {
		                throwError({}, Messages.UnknownLabel, label.name);
		            }
		        }
		
		        consumeSemicolon();
		
		        if (label === null && !state.inIteration) {
		            throwError({}, Messages.IllegalContinue);
		        }
		
		        return node.finishContinueStatement(label);
		    }
		
		    // 12.8 The break statement
		
		    function parseBreakStatement(node) {
		        var label = null, key;
		
		        expectKeyword('break');
		
		        // Catch the very common case first: immediately a semicolon (U+003B).
		        if (source.charCodeAt(index) === 0x3B) {
		            lex();
		
		            if (!(state.inIteration || state.inSwitch)) {
		                throwError({}, Messages.IllegalBreak);
		            }
		
		            return node.finishBreakStatement(null);
		        }
		
		        if (peekLineTerminator()) {
		            if (!(state.inIteration || state.inSwitch)) {
		                throwError({}, Messages.IllegalBreak);
		            }
		
		            return node.finishBreakStatement(null);
		        }
		
		        if (lookahead.type === Token.Identifier) {
		            label = parseVariableIdentifier();
		
		            key = '$' + label.name;
		            if (!Object.prototype.hasOwnProperty.call(state.labelSet, key)) {
		                throwError({}, Messages.UnknownLabel, label.name);
		            }
		        }
		
		        consumeSemicolon();
		
		        if (label === null && !(state.inIteration || state.inSwitch)) {
		            throwError({}, Messages.IllegalBreak);
		        }
		
		        return node.finishBreakStatement(label);
		    }
		
		    // 12.9 The return statement
		
		    function parseReturnStatement(node) {
		        var argument = null;
		
		        expectKeyword('return');
		
		        if (!state.inFunctionBody) {
		            throwErrorTolerant({}, Messages.IllegalReturn);
		        }
		
		        // 'return' followed by a space and an identifier is very common.
		        if (source.charCodeAt(index) === 0x20) {
		            if (isIdentifierStart(source.charCodeAt(index + 1))) {
		                argument = parseExpression();
		                consumeSemicolon();
		                return node.finishReturnStatement(argument);
		            }
		        }
		
		        if (peekLineTerminator()) {
		            return node.finishReturnStatement(null);
		        }
		
		        if (!match(';')) {
		            if (!match('}') && lookahead.type !== Token.EOF) {
		                argument = parseExpression();
		            }
		        }
		
		        consumeSemicolon();
		
		        return node.finishReturnStatement(argument);
		    }
		
		    // 12.10 The with statement
		
		    function parseWithStatement(node) {
		        var object, body;
		
		        if (strict) {
		            // TODO(ikarienator): Should we update the test cases instead?
		            skipComment();
		            throwErrorTolerant({}, Messages.StrictModeWith);
		        }
		
		        expectKeyword('with');
		
		        expect('(');
		
		        object = parseExpression();
		
		        expect(')');
		
		        body = parseStatement();
		
		        return node.finishWithStatement(object, body);
		    }
		
		    // 12.10 The swith statement
		
		    function parseSwitchCase() {
		        var test, consequent = [], statement, node = new Node();
		
		        if (matchKeyword('default')) {
		            lex();
		            test = null;
		        } else {
		            expectKeyword('case');
		            test = parseExpression();
		        }
		        expect(':');
		
		        while (index < length) {
		            if (match('}') || matchKeyword('default') || matchKeyword('case')) {
		                break;
		            }
		            statement = parseStatement();
		            consequent.push(statement);
		        }
		
		        return node.finishSwitchCase(test, consequent);
		    }
		
		    function parseSwitchStatement(node) {
		        var discriminant, cases, clause, oldInSwitch, defaultFound;
		
		        expectKeyword('switch');
		
		        expect('(');
		
		        discriminant = parseExpression();
		
		        expect(')');
		
		        expect('{');
		
		        cases = [];
		
		        if (match('}')) {
		            lex();
		            return node.finishSwitchStatement(discriminant, cases);
		        }
		
		        oldInSwitch = state.inSwitch;
		        state.inSwitch = true;
		        defaultFound = false;
		
		        while (index < length) {
		            if (match('}')) {
		                break;
		            }
		            clause = parseSwitchCase();
		            if (clause.test === null) {
		                if (defaultFound) {
		                    throwError({}, Messages.MultipleDefaultsInSwitch);
		                }
		                defaultFound = true;
		            }
		            cases.push(clause);
		        }
		
		        state.inSwitch = oldInSwitch;
		
		        expect('}');
		
		        return node.finishSwitchStatement(discriminant, cases);
		    }
		
		    // 12.13 The throw statement
		
		    function parseThrowStatement(node) {
		        var argument;
		
		        expectKeyword('throw');
		
		        if (peekLineTerminator()) {
		            throwError({}, Messages.NewlineAfterThrow);
		        }
		
		        argument = parseExpression();
		
		        consumeSemicolon();
		
		        return node.finishThrowStatement(argument);
		    }
		
		    // 12.14 The try statement
		
		    function parseCatchClause() {
		        var param, body, node = new Node();
		
		        expectKeyword('catch');
		
		        expect('(');
		        if (match(')')) {
		            throwUnexpected(lookahead);
		        }
		
		        param = parseVariableIdentifier();
		        // 12.14.1
		        if (strict && isRestrictedWord(param.name)) {
		            throwErrorTolerant({}, Messages.StrictCatchVariable);
		        }
		
		        expect(')');
		        body = parseBlock();
		        return node.finishCatchClause(param, body);
		    }
		
		    function parseTryStatement(node) {
		        var block, handlers = [], finalizer = null;
		
		        expectKeyword('try');
		
		        block = parseBlock();
		
		        if (matchKeyword('catch')) {
		            handlers.push(parseCatchClause());
		        }
		
		        if (matchKeyword('finally')) {
		            lex();
		            finalizer = parseBlock();
		        }
		
		        if (handlers.length === 0 && !finalizer) {
		            throwError({}, Messages.NoCatchOrFinally);
		        }
		
		        return node.finishTryStatement(block, [], handlers, finalizer);
		    }
		
		    // 12.15 The debugger statement
		
		    function parseDebuggerStatement(node) {
		        expectKeyword('debugger');
		
		        consumeSemicolon();
		
		        return node.finishDebuggerStatement();
		    }
		
		    // 12 Statements
		
		    function parseStatement() {
		        var type = lookahead.type,
		            expr,
		            labeledBody,
		            key,
		            node;
		
		        if (type === Token.EOF) {
		            throwUnexpected(lookahead);
		        }
		
		        if (type === Token.Punctuator && lookahead.value === '{') {
		            return parseBlock();
		        }
		
		        node = new Node();
		
		        if (type === Token.Punctuator) {
		            switch (lookahead.value) {
		            case ';':
		                return parseEmptyStatement(node);
		            case '(':
		                return parseExpressionStatement(node);
		            default:
		                break;
		            }
		        } else if (type === Token.Keyword) {
		            switch (lookahead.value) {
		            case 'break':
		                return parseBreakStatement(node);
		            case 'continue':
		                return parseContinueStatement(node);
		            case 'debugger':
		                return parseDebuggerStatement(node);
		            case 'do':
		                return parseDoWhileStatement(node);
		            case 'for':
		                return parseForStatement(node);
		            case 'function':
		                return parseFunctionDeclaration(node);
		            case 'if':
		                return parseIfStatement(node);
		            case 'return':
		                return parseReturnStatement(node);
		            case 'switch':
		                return parseSwitchStatement(node);
		            case 'throw':
		                return parseThrowStatement(node);
		            case 'try':
		                return parseTryStatement(node);
		            case 'var':
		                return parseVariableStatement(node);
		            case 'while':
		                return parseWhileStatement(node);
		            case 'with':
		                return parseWithStatement(node);
		            default:
		                break;
		            }
		        }
		
		        expr = parseExpression();
		
		        // 12.12 Labelled Statements
		        if ((expr.type === Syntax.Identifier) && match(':')) {
		            lex();
		
		            key = '$' + expr.name;
		            if (Object.prototype.hasOwnProperty.call(state.labelSet, key)) {
		                throwError({}, Messages.Redeclaration, 'Label', expr.name);
		            }
		
		            state.labelSet[key] = true;
		            labeledBody = parseStatement();
		            delete state.labelSet[key];
		            return node.finishLabeledStatement(expr, labeledBody);
		        }
		
		        consumeSemicolon();
		
		        return node.finishExpressionStatement(expr);
		    }
		
		    // 13 Function Definition
		
		    function parseFunctionSourceElements() {
		        var sourceElement, sourceElements = [], token, directive, firstRestricted,
		            oldLabelSet, oldInIteration, oldInSwitch, oldInFunctionBody, oldParenthesisCount,
		            node = new Node();
		
		        expect('{');
		
		        while (index < length) {
		            if (lookahead.type !== Token.StringLiteral) {
		                break;
		            }
		            token = lookahead;
		
		            sourceElement = parseSourceElement();
		            sourceElements.push(sourceElement);
		            if (sourceElement.expression.type !== Syntax.Literal) {
		                // this is not directive
		                break;
		            }
		            directive = source.slice(token.start + 1, token.end - 1);
		            if (directive === 'use strict') {
		                strict = true;
		                if (firstRestricted) {
		                    throwErrorTolerant(firstRestricted, Messages.StrictOctalLiteral);
		                }
		            } else {
		                if (!firstRestricted && token.octal) {
		                    firstRestricted = token;
		                }
		            }
		        }
		
		        oldLabelSet = state.labelSet;
		        oldInIteration = state.inIteration;
		        oldInSwitch = state.inSwitch;
		        oldInFunctionBody = state.inFunctionBody;
		        oldParenthesisCount = state.parenthesizedCount;
		
		        state.labelSet = {};
		        state.inIteration = false;
		        state.inSwitch = false;
		        state.inFunctionBody = true;
		        state.parenthesizedCount = 0;
		
		        while (index < length) {
		            if (match('}')) {
		                break;
		            }
		            sourceElement = parseSourceElement();
		            if (typeof sourceElement === 'undefined') {
		                break;
		            }
		            sourceElements.push(sourceElement);
		        }
		
		        expect('}');
		
		        state.labelSet = oldLabelSet;
		        state.inIteration = oldInIteration;
		        state.inSwitch = oldInSwitch;
		        state.inFunctionBody = oldInFunctionBody;
		        state.parenthesizedCount = oldParenthesisCount;
		
		        return node.finishBlockStatement(sourceElements);
		    }
		
		    function validateParam(options, param, name) {
		        var key = '$' + name;
		        if (strict) {
		            if (isRestrictedWord(name)) {
		                options.stricted = param;
		                options.message = Messages.StrictParamName;
		            }
		            if (Object.prototype.hasOwnProperty.call(options.paramSet, key)) {
		                options.stricted = param;
		                options.message = Messages.StrictParamDupe;
		            }
		        } else if (!options.firstRestricted) {
		            if (isRestrictedWord(name)) {
		                options.firstRestricted = param;
		                options.message = Messages.StrictParamName;
		            } else if (isStrictModeReservedWord(name)) {
		                options.firstRestricted = param;
		                options.message = Messages.StrictReservedWord;
		            } else if (Object.prototype.hasOwnProperty.call(options.paramSet, key)) {
		                options.firstRestricted = param;
		                options.message = Messages.StrictParamDupe;
		            }
		        }
		        options.paramSet[key] = true;
		    }
		
		    function parseParam(options) {
		        var token, param, def;
		
		        token = lookahead;
		        param = parseVariableIdentifier();
		        validateParam(options, token, token.value);
		        if (match('=')) {
		            lex();
		            def = parseAssignmentExpression();
		            ++options.defaultCount;
		        }
		
		        options.params.push(param);
		        options.defaults.push(def);
		
		        return !match(')');
		    }
		
		    function parseParams(firstRestricted) {
		        var options;
		
		        options = {
		            params: [],
		            defaultCount: 0,
		            defaults: [],
		            firstRestricted: firstRestricted
		        };
		
		        expect('(');
		
		        if (!match(')')) {
		            options.paramSet = {};
		            while (index < length) {
		                if (!parseParam(options)) {
		                    break;
		                }
		                expect(',');
		            }
		        }
		
		        expect(')');
		
		        if (options.defaultCount === 0) {
		            options.defaults = [];
		        }
		
		        return {
		            params: options.params,
		            defaults: options.defaults,
		            stricted: options.stricted,
		            firstRestricted: options.firstRestricted,
		            message: options.message
		        };
		    }
		
		    function parseFunctionDeclaration() {
		        var id, params = [], defaults = [], body, token, stricted, tmp, firstRestricted, message, previousStrict, node = new Node();
		
		        expectKeyword('function');
		        token = lookahead;
		        id = parseVariableIdentifier();
		        if (strict) {
		            if (isRestrictedWord(token.value)) {
		                throwErrorTolerant(token, Messages.StrictFunctionName);
		            }
		        } else {
		            if (isRestrictedWord(token.value)) {
		                firstRestricted = token;
		                message = Messages.StrictFunctionName;
		            } else if (isStrictModeReservedWord(token.value)) {
		                firstRestricted = token;
		                message = Messages.StrictReservedWord;
		            }
		        }
		
		        tmp = parseParams(firstRestricted);
		        params = tmp.params;
		        defaults = tmp.defaults;
		        stricted = tmp.stricted;
		        firstRestricted = tmp.firstRestricted;
		        if (tmp.message) {
		            message = tmp.message;
		        }
		
		        previousStrict = strict;
		        body = parseFunctionSourceElements();
		        if (strict && firstRestricted) {
		            throwError(firstRestricted, message);
		        }
		        if (strict && stricted) {
		            throwErrorTolerant(stricted, message);
		        }
		        strict = previousStrict;
		
		        return node.finishFunctionDeclaration(id, params, defaults, body);
		    }
		
		    function parseFunctionExpression() {
		        var token, id = null, stricted, firstRestricted, message, tmp,
		            params = [], defaults = [], body, previousStrict, node = new Node();
		
		        expectKeyword('function');
		
		        if (!match('(')) {
		            token = lookahead;
		            id = parseVariableIdentifier();
		            if (strict) {
		                if (isRestrictedWord(token.value)) {
		                    throwErrorTolerant(token, Messages.StrictFunctionName);
		                }
		            } else {
		                if (isRestrictedWord(token.value)) {
		                    firstRestricted = token;
		                    message = Messages.StrictFunctionName;
		                } else if (isStrictModeReservedWord(token.value)) {
		                    firstRestricted = token;
		                    message = Messages.StrictReservedWord;
		                }
		            }
		        }
		
		        tmp = parseParams(firstRestricted);
		        params = tmp.params;
		        defaults = tmp.defaults;
		        stricted = tmp.stricted;
		        firstRestricted = tmp.firstRestricted;
		        if (tmp.message) {
		            message = tmp.message;
		        }
		
		        previousStrict = strict;
		        body = parseFunctionSourceElements();
		        if (strict && firstRestricted) {
		            throwError(firstRestricted, message);
		        }
		        if (strict && stricted) {
		            throwErrorTolerant(stricted, message);
		        }
		        strict = previousStrict;
		
		        return node.finishFunctionExpression(id, params, defaults, body);
		    }
		
		    // 14 Program
		
		    function parseSourceElement() {
		        if (lookahead.type === Token.Keyword) {
		            switch (lookahead.value) {
		            case 'const':
		            case 'let':
		                return parseConstLetDeclaration(lookahead.value);
		            case 'function':
		                return parseFunctionDeclaration();
		            default:
		                return parseStatement();
		            }
		        }
		
		        if (lookahead.type !== Token.EOF) {
		            return parseStatement();
		        }
		    }
		
		    function parseSourceElements() {
		        var sourceElement, sourceElements = [], token, directive, firstRestricted;
		
		        while (index < length) {
		            token = lookahead;
		            if (token.type !== Token.StringLiteral) {
		                break;
		            }
		
		            sourceElement = parseSourceElement();
		            sourceElements.push(sourceElement);
		            if (sourceElement.expression.type !== Syntax.Literal) {
		                // this is not directive
		                break;
		            }
		            directive = source.slice(token.start + 1, token.end - 1);
		            if (directive === 'use strict') {
		                strict = true;
		                if (firstRestricted) {
		                    throwErrorTolerant(firstRestricted, Messages.StrictOctalLiteral);
		                }
		            } else {
		                if (!firstRestricted && token.octal) {
		                    firstRestricted = token;
		                }
		            }
		        }
		
		        while (index < length) {
		            sourceElement = parseSourceElement();
		            /* istanbul ignore if */
		            if (typeof sourceElement === 'undefined') {
		                break;
		            }
		            sourceElements.push(sourceElement);
		        }
		        return sourceElements;
		    }
		
		    function parseProgram() {
		        var body, node;
		
		        skipComment();
		        peek();
		        node = new Node();
		        strict = false;
		
		        body = parseSourceElements();
		        return node.finishProgram(body);
		    }
		
		    function filterTokenLocation() {
		        var i, entry, token, tokens = [];
		
		        for (i = 0; i < extra.tokens.length; ++i) {
		            entry = extra.tokens[i];
		            token = {
		                type: entry.type,
		                value: entry.value
		            };
		            if (extra.range) {
		                token.range = entry.range;
		            }
		            if (extra.loc) {
		                token.loc = entry.loc;
		            }
		            tokens.push(token);
		        }
		
		        extra.tokens = tokens;
		    }
		
		    function tokenize(code, options) {
		        var toString,
		            tokens;
		
		        toString = String;
		        if (typeof code !== 'string' && !(code instanceof String)) {
		            code = toString(code);
		        }
		
		        source = code;
		        index = 0;
		        lineNumber = (source.length > 0) ? 1 : 0;
		        lineStart = 0;
		        length = source.length;
		        lookahead = null;
		        state = {
		            allowIn: true,
		            labelSet: {},
		            inFunctionBody: false,
		            inIteration: false,
		            inSwitch: false,
		            lastCommentStart: -1
		        };
		
		        extra = {};
		
		        // Options matching.
		        options = options || {};
		
		        // Of course we collect tokens here.
		        options.tokens = true;
		        extra.tokens = [];
		        extra.tokenize = true;
		        // The following two fields are necessary to compute the Regex tokens.
		        extra.openParenToken = -1;
		        extra.openCurlyToken = -1;
		
		        extra.range = (typeof options.range === 'boolean') && options.range;
		        extra.loc = (typeof options.loc === 'boolean') && options.loc;
		
		        if (typeof options.comment === 'boolean' && options.comment) {
		            extra.comments = [];
		        }
		        if (typeof options.tolerant === 'boolean' && options.tolerant) {
		            extra.errors = [];
		        }
		
		        try {
		            peek();
		            if (lookahead.type === Token.EOF) {
		                return extra.tokens;
		            }
		
		            lex();
		            while (lookahead.type !== Token.EOF) {
		                try {
		                    lex();
		                } catch (lexError) {
		                    if (extra.errors) {
		                        extra.errors.push(lexError);
		                        // We have to break on the first error
		                        // to avoid infinite loops.
		                        break;
		                    } else {
		                        throw lexError;
		                    }
		                }
		            }
		
		            filterTokenLocation();
		            tokens = extra.tokens;
		            if (typeof extra.comments !== 'undefined') {
		                tokens.comments = extra.comments;
		            }
		            if (typeof extra.errors !== 'undefined') {
		                tokens.errors = extra.errors;
		            }
		        } catch (e) {
		            throw e;
		        } finally {
		            extra = {};
		        }
		        return tokens;
		    }
		
		    function parse(code, options) {
		        var program, toString;
		
		        toString = String;
		        if (typeof code !== 'string' && !(code instanceof String)) {
		            code = toString(code);
		        }
		
		        source = code;
		        index = 0;
		        lineNumber = (source.length > 0) ? 1 : 0;
		        lineStart = 0;
		        length = source.length;
		        lookahead = null;
		        state = {
		            allowIn: true,
		            labelSet: {},
		            parenthesisCount: 0,
		            inFunctionBody: false,
		            inIteration: false,
		            inSwitch: false,
		            lastCommentStart: -1
		        };
		
		        extra = {};
		        if (typeof options !== 'undefined') {
		            extra.range = (typeof options.range === 'boolean') && options.range;
		            extra.loc = (typeof options.loc === 'boolean') && options.loc;
		            extra.attachComment = (typeof options.attachComment === 'boolean') && options.attachComment;
		
		            if (extra.loc && options.source !== null && options.source !== undefined) {
		                extra.source = toString(options.source);
		            }
		
		            if (typeof options.tokens === 'boolean' && options.tokens) {
		                extra.tokens = [];
		            }
		            if (typeof options.comment === 'boolean' && options.comment) {
		                extra.comments = [];
		            }
		            if (typeof options.tolerant === 'boolean' && options.tolerant) {
		                extra.errors = [];
		            }
		            if (extra.attachComment) {
		                extra.range = true;
		                extra.comments = [];
		                extra.bottomRightStack = [];
		                extra.trailingComments = [];
		                extra.leadingComments = [];
		            }
		        }
		
		        try {
		            program = parseProgram();
		            if (typeof extra.comments !== 'undefined') {
		                program.comments = extra.comments;
		            }
		            if (typeof extra.tokens !== 'undefined') {
		                filterTokenLocation();
		                program.tokens = extra.tokens;
		            }
		            if (typeof extra.errors !== 'undefined') {
		                program.errors = extra.errors;
		            }
		        } catch (e) {
		            throw e;
		        } finally {
		            extra = {};
		        }
		
		        return program;
		    }
		
		    // Sync with *.json manifests.
		    exports.version = '2.0.0-dev';
		
		    exports.tokenize = tokenize;
		
		    exports.parse = parse;
		
		    // Deep copy.
		   /* istanbul ignore next */
		    exports.Syntax = (function () {
		        var name, types = {};
		
		        if (typeof Object.create === 'function') {
		            types = Object.create(null);
		        }
		
		        for (name in Syntax) {
		            if (Syntax.hasOwnProperty(name)) {
		                types[name] = Syntax[name];
		            }
		        }
		
		        if (typeof Object.freeze === 'function') {
		            Object.freeze(types);
		        }
		
		        return types;
		    }());
		
		}));
		/* vim: set sw=4 ts=4 et tw=80 : */
		
	};

	$__modules__.Platform = function (exports) {
		// ----------------------------------------------------------------------------
		// Copyright (c) Microsoft Corporation. All rights reserved.
		// ----------------------------------------------------------------------------
		
		/// <reference path="..\Generated\MobileServices.DevIntellisense.js" />
		/*global $__fileVersion__:false, $__version__:false */
		
		var _ = require('Extensions');
		var Validate = require('Validate');
		var Promises = require('Promises');
		var Resources = require('Resources');
		var inMemorySettingStore = {};
		
		try {
		    var key = '___z';
		    localStorage.setItem(key, key);
		    localStorage.removeItem(key);
		    inMemorySettingStore = localStorage;
		} catch (e) {
		    // localStorage is not available
		}
		
		var bestAvailableTransport = null;
		var knownTransports = [ // In order of preference
		    require('DirectAjaxTransport'),
		    require('IframeTransport')
		];
		var knownLoginUis = [ // In order of preference
		    require('WebAuthBroker'),
		    require('CordovaPopup'),
		    require('BrowserPopup')
		];
		
		// Matches an ISO date and separates out the fractional part of the seconds
		// because IE < 10 has quirks parsing fractional seconds
		var isoDateRegex = /^(\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2})(?:\.(\d*))?Z$/;
		
		// Feature-detect IE8's date serializer
		var dateSerializerOmitsDecimals = !JSON.stringify(new Date(100)).match(/\.100Z"$/);
		
		exports.async = function async(func) {
		    /// <summary>
		    /// Wrap a function that takes a callback into platform specific async
		    /// operation (i.e., keep using callbacks or switch to promises).
		    /// </summary>
		    /// <param name="func" type="Function">
		    /// An async function with a callback as its last parameter 
		    /// </param>
		    /// <returns type="Function">
		    /// Function that when invoked will return a promise.
		    /// </returns>
		
		    return function () {
		        // Capture the context of the original call
		        var that = this;
		        var args = arguments;
		
		        // Create a new promise that will wrap the async call
		        return new Promises.Promise(function (complete, error) {
		
		            // Add a callback to the args which will call the appropriate
		            // promise handlers
		            var callback = function (err) {
		                if (_.isNull(err)) {
		                    // Call complete with all the args except for err
		                    complete.apply(null, Array.prototype.slice.call(arguments, 1));
		                } else {
		                    error(err);
		                }
		            };
		            Array.prototype.push.call(args, callback);
		
		            try {
		                // Invoke the async method which will in turn invoke our callback
		                // which will in turn invoke the promise's handlers
		                func.apply(that, args);
		            } catch (ex) {
		                // Thread any immediate errors like parameter validation
		                // through the the callback
		                callback(_.createError(ex));
		            }
		        });
		    };
		};
		
		exports.addToMobileServicesClientNamespace = function (declarations) {
		    /// <summary>
		    /// Define a collection of declarations in the Mobile Services Client namespace.
		    /// </summary>
		    /// <param name="declarations" type="Object">
		    /// Object consisting of names and values to define in the namespace.
		    /// </param>
		
		    // First ensure our 'WindowsAzure' namespace exists
		    var namespaceObject = global.WindowsAzure = global.WindowsAzure || {};
		    
		    // Now add each of the declarations to the namespace
		    for (var key in declarations) {
		        if (declarations.hasOwnProperty(key)) {
		            namespaceObject[key] = declarations[key];
		        }
		    }
		};
		
		exports.readSetting = function readSetting(name) {
		    /// <summary>
		    /// Read a setting from a global configuration store.
		    /// </summary>
		    /// <param name="name" type="String">
		    /// Name of the setting to read.
		    /// </param>
		    /// <returns type="String" mayBeNull="true">
		    /// The value of the setting or null if not set.
		    /// </returns>
		
		    return inMemorySettingStore[name];
		};
		
		exports.writeSetting = function writeSetting(name, value) {
		    /// <summary>
		    /// Write a setting to a global configuration store.
		    /// </summary>
		    /// <param name="name" type="String">
		    /// Name of the setting to write.
		    /// </param>
		    /// <param name="value" type="String" mayBeNull="true">
		    /// The value of the setting.
		    /// </returns>
		
		    inMemorySettingStore[name] = value;
		};
		
		exports.webRequest = function (request, callback) {
		    /// <summary>
		    /// Make a web request.
		    /// </summary>
		    /// <param name="request" type="Object">
		    /// Object describing the request (in the WinJS.xhr format).
		    /// </param>
		    /// <param name="callback" type="Function">
		    /// The callback to execute when the request completes.
		    /// </param>
		
		    return getBestTransport().performRequest(request, callback);
		};
		
		exports.getUserAgent = function () {
		    // Browsers don't allow you to set a custom user-agent in ajax requests. Trying to do so
		    // will cause an exception. So we don't.
		    return null;
		};
		
		exports.getOperatingSystemInfo = function () {
		    return {
		        name: "--",
		        version: "--",
		        architecture: "--"
		    };
		};
		
		exports.getSdkInfo = function () {
		    var isCordovaEnvironment = window && window.cordova && window.cordova.version;
		
		    return {
		        language: isCordovaEnvironment ? "Cordova" : "Web",
		        fileVersion: $__fileVersion__
		    };
		};
		
		exports.login = function (startUri, endUri, callback) {
		    // Force logins to go over HTTPS because the runtime is hardcoded to redirect
		    // the server flow back to HTTPS, and we need the origin to match.
		    var findProtocol = /^[a-z]+:/,
		        requiredProtocol = 'https:';
		    startUri = startUri.replace(findProtocol, requiredProtocol);
		    if (endUri) {
		        endUri = endUri.replace(findProtocol, requiredProtocol);
		    }
		
		    return getBestProvider(knownLoginUis).login(startUri, endUri, callback);
		};
		
		exports.toJson = function (value) {
		    /// <summary>
		    /// Convert an object into JSON format.
		    /// </summary>
		    /// <param name="value" type="Object">The value to convert.</param>
		    /// <returns type="String">The value as JSON.</returns>
		
		    // We're wrapping this so we can hook the process and perform custom JSON
		    // conversions.  Note that we don't have to add a special hook to correctly
		    // serialize dates in ISO8061 because JSON.stringify does that by defualt.
		    // TODO: Convert geolocations once they're supported
		    // TODO: Expose the ability for developers to convert custom types
		    return JSON.stringify(value, function (key, stringifiedValue) {
		        if (dateSerializerOmitsDecimals && this && _.isDate(this[key])) {
		            // IE8 doesn't include the decimal part in its serialization of dates
		            // For consistency, we extract the non-decimal part from the string
		            // representation, and then append the expected decimal part.
		            var msec = this[key].getMilliseconds(),
		                msecString = String(msec + 1000).substring(1);
		            return stringifiedValue.replace(isoDateRegex, function (all, datetime) {
		                return datetime + "." + msecString + "Z";
		            });
		        } else {
		            return stringifiedValue;
		        }
		    });
		};
		
		exports.tryParseIsoDateString = function (text) {
		    /// <summary>
		    /// Try to parse an ISO date string.
		    /// </summary>
		    /// <param name="text" type="String">The text to parse.</param>
		    /// <returns type="Date">The parsed Date or null.</returns>
		
		    Validate.isString(text);
		
		    // Check against a lenient regex
		    var matchedDate = isoDateRegex.exec(text);
		    if (matchedDate) {
		        // IE9 only handles precisely 0 or 3 decimal places when parsing ISO dates,
		        // and IE8 doesn't parse them at all. Fortunately, all browsers can handle 
		        // 'yyyy/mm/dd hh:MM:ss UTC' (without fractional seconds), so we can rewrite
		        // the date to that format, and the apply fractional seconds.
		        var dateWithoutFraction = matchedDate[1],
		            fraction = matchedDate[2] || "0",
		            milliseconds = Math.round(1000 * Number("0." + fraction)); // 6 -> 600, 65 -> 650, etc.
		        dateWithoutFraction = dateWithoutFraction
		            .replace(/\-/g, "/")   // yyyy-mm-ddThh:mm:ss -> yyyy/mm/ddThh:mm:ss
		            .replace("T", " ");    // yyyy/mm/ddThh:mm:ss -> yyyy/mm/dd hh:mm:ss
		
		        // Try and parse - it will return NaN if invalid
		        var ticks = Date.parse(dateWithoutFraction + " UTC");
		        if (!isNaN(ticks)) {
		            return new Date(ticks + milliseconds); // ticks are just milliseconds since 1970/01/01
		        }
		    }
		
		    // Doesn't look like a date
		    return null;
		};
		
		exports.getResourceString = function (resourceName) {
		    // For now, we'll just always use English
		    return Resources["en-US"][resourceName];
		};
		
		
		exports.allowPlatformToMutateOriginal = function (original, updated) {
		    // For the Web/HTML client, we don't modify the original object.
		    // This is the more typical arrangement for most JavaScript data access.
		    return updated;
		};
		
		function getBestTransport() {
		    // We cache this just because it gets called such a lot
		    if (!bestAvailableTransport) {
		        bestAvailableTransport = getBestProvider(knownTransports);
		    }
		
		    return bestAvailableTransport;
		}
		
		function getBestProvider(providers) {
		    /// <summary>
		    /// Given an array of objects which each have a 'supportsCurrentRuntime' function,
		    /// returns the first instance where that function returns true.
		    /// </summary>
		
		    for (var i = 0; i < providers.length; i++) {
		        if (providers[i].supportsCurrentRuntime()) {
		            return providers[i];
		        }
		    }
		
		    throw new Error("Unsupported browser - no suitable providers are available.");
		}
	};

	$__modules__.DirectAjaxTransport = function (exports) {
		// ----------------------------------------------------------------------------
		// Copyright (c) Microsoft Corporation. All rights reserved.
		// ----------------------------------------------------------------------------
		
		/// <reference path="..\Generated\MobileServices.DevIntellisense.js" />
		
		// This transport is for modern browsers - it uses XMLHttpRequest with Cross-Origin Resource Sharing (CORS)
		
		exports.name = "DirectAjaxTransport";
		
		exports.supportsCurrentRuntime = function () {
		    /// <summary>
		    /// Determines whether or not this transport is usable in the current runtime.
		    /// </summary>
		
		    // Feature-detect support for CORS (for IE, it's in version 10+)
		    return (typeof global.XMLHttpRequest !== "undefined") &&
		           ('withCredentials' in new global.XMLHttpRequest());
		};
		
		exports.performRequest = function (request, callback) {
		    /// <summary>
		    /// Make a web request.
		    /// </summary>
		    /// <param name="request" type="Object">
		    /// Object describing the request (in the WinJS.xhr format).
		    /// </param>
		    /// <param name="callback" type="Function">
		    /// The callback to execute when the request completes.
		    /// </param>
		
		    var headers = request.headers || {},
		        url = request.url.replace(/#.*$/, ""), // Strip hash part of URL for consistency across browsers
		        httpMethod = request.type ? request.type.toUpperCase() : "GET",
		        xhr = new global.XMLHttpRequest();
		
		    xhr.onreadystatechange = function () {
		        if (xhr.readyState === 4) {
		            callback(null, xhr);
		        }
		    };
		
		    xhr.open(httpMethod, url);
		
		    for (var key in headers) {
		        if (request.headers.hasOwnProperty(key)) {
		            xhr.setRequestHeader(key, request.headers[key]);
		        }
		    }
		
		    xhr.send(request.data);
		};
	};

	$__modules__.IframeTransport = function (exports) {
		// ----------------------------------------------------------------------------
		// Copyright (c) Microsoft Corporation. All rights reserved.
		// ----------------------------------------------------------------------------
		
		/// <reference path="..\Generated\MobileServices.DevIntellisense.js" />
		
		// This transport is for midlevel browsers (IE8-9) that don't support CORS but do support postMessage.
		// It creates an invisible <iframe> that loads a special bridge.html page from the runtime domain.
		// To issue a request, it uses postMessage to pass the request into the <iframe>, which in turn makes
		// a same-domain Ajax request to the runtime. To associate postMessage replies with the original
		// request, we track an array of promises that eventually time out if not resolved (see PostMessageExchange).
		
		var Promises = require('Promises'),
		    PostMessageExchange = require('PostMessageExchange'),
		    loadBridgeFramePromises = [], // One per target proto/host/port triplet
		    messageExchange = PostMessageExchange.instance;
		
		exports.name = "IframeTransport";
		
		exports.supportsCurrentRuntime = function () {
		    /// <summary>
		    /// Determines whether or not this transport is usable in the current runtime.
		    /// </summary>
		
		    return typeof global.postMessage !== "undefined";
		};
		
		exports.performRequest = function (request, callback) {
		    /// <summary>
		    /// Make a web request.
		    /// </summary>
		    /// <param name="request" type="Object">
		    /// Object describing the request (in the WinJS.xhr format).
		    /// </param>
		    /// <param name="callback" type="Function">
		    /// The callback to execute when the request completes.
		    /// </param>
		
		    var originRoot = PostMessageExchange.getOriginRoot(request.url);
		    whenBridgeLoaded(originRoot, function (bridgeFrame) {
		        var message = {
		            type: request.type,
		            url: request.url,
		            headers: request.headers,
		            data: request.data
		        };
		        messageExchange.request(bridgeFrame.contentWindow, message, originRoot).then(function (reply) {
		            fixupAjax(reply);
		            callback(null, reply);
		        }, function (error) {
		            callback(error, null);
		        });
		    });
		};
		
		function fixupAjax(xhr) {
		    if (xhr) {
		        // IE sometimes converts status 204 into 1223
		        // http://stackoverflow.com/questions/10046972/msie-returns-status-code-of-1223-for-ajax-request
		        if (xhr.status === 1223) {
		            xhr.status = 204;
		        }
		    }
		}
		
		function whenBridgeLoaded(originRoot, callback) {
		    /// <summary>
		    /// Performs the callback once the bridge iframe has finished loading.
		    /// Lazily creates the bridge iframe if necessary. Note that each proto/host/port
		    /// triplet (i.e., same-domain origin) needs a separate bridge.
		    /// </summary>
		
		    var cacheEntry = loadBridgeFramePromises[originRoot];
		
		    if (!cacheEntry) {
		        cacheEntry = loadBridgeFramePromises[originRoot] = new Promises.Promise(function (complete, error) {
		            var bridgeFrame = document.createElement("iframe"),
		                callerOrigin = PostMessageExchange.getOriginRoot(window.location.href),
		                handleBridgeLoaded = function() {
		                    complete(bridgeFrame);
		                };
		            
		            if (bridgeFrame.addEventListener) {
		                bridgeFrame.addEventListener("load", handleBridgeLoaded, false);
		            } else {
		                // For IE8
		                bridgeFrame.attachEvent("onload", handleBridgeLoaded);
		            }
		
		            bridgeFrame.src = originRoot + "/crossdomain/bridge?origin=" + encodeURIComponent(callerOrigin);
		            
		            // Try to keep it invisible, even if someone does $("iframe").show()
		            bridgeFrame.setAttribute("width", 0);
		            bridgeFrame.setAttribute("height", 0);
		            bridgeFrame.style.display = "none";
		
		            global.document.body.appendChild(bridgeFrame);
		        });
		    }
		
		    cacheEntry.then(callback);
		}
		
		
	};

	$__modules__.BrowserPopup = function (exports) {
		// ----------------------------------------------------------------------------
		// Copyright (c) Microsoft Corporation. All rights reserved.
		// ----------------------------------------------------------------------------
		
		var PostMessageExchange = require('PostMessageExchange');
		
		exports.supportsCurrentRuntime = function () {
		    /// <summary>
		    /// Determines whether or not this login UI is usable in the current runtime.
		    /// </summary>
		    return true;
		};
		
		exports.login = function (startUri, endUri, callback) {
		    /// <summary>
		    /// Displays the login UI and calls back on completion
		    /// </summary>
		
		    // Tell the runtime which form of completion signal we are looking for,
		    // and which origin should be allowed to receive the result (note that this
		    // is validated against whitelist on the server; we are only supplying this
		    // origin to indicate *which* of the whitelisted origins to use).
		    var completionOrigin = PostMessageExchange.getOriginRoot(window.location.href),
		        runtimeOrigin = PostMessageExchange.getOriginRoot(startUri),
		        // IE does not support popup->opener postMessage calls, so we have to
		        // route the message via an iframe
		        useIntermediateIframe = window.navigator.userAgent.indexOf("MSIE") >= 0 || window.navigator.userAgent.indexOf("Trident") >= 0,
		        intermediateIframe = useIntermediateIframe && createIntermediateIframeForLogin(runtimeOrigin, completionOrigin),
		        completionType = useIntermediateIframe ? "iframe" : "postMessage";
		
		    startUri += startUri.indexOf('?') == -1 ? '?' : '&';
		    startUri += "completion_type=" + completionType + "&completion_origin=" + encodeURIComponent(completionOrigin);
		
		    // Browsers don't allow postMessage to a file:// URL (except by setting origin to "*", which is unacceptable)
		    // so abort the process early with an explanation in that case.
		    if (!(completionOrigin && (completionOrigin.indexOf("http:") === 0 || completionOrigin.indexOf("https:") === 0))) {
		        var error = "Login is only supported from http:// or https:// URLs. Please host your page in a web server.";
		        callback(error, null);
		        return;
		    }
		
		    var loginWindow = window.open(startUri, "_blank", "location=no"),
		        complete = function(errorValue, oauthValue) {
		            // Clean up event handlers, windows, frames, ...
		            window.clearInterval(checkForWindowClosedInterval);
		            loginWindow.close();
		            if (window.removeEventListener) {
		                window.removeEventListener("message", handlePostMessage);
		            } else {
		                // For IE8
		                window.detachEvent("onmessage", handlePostMessage);
		            }
		            if (intermediateIframe) {
		                intermediateIframe.parentNode.removeChild(intermediateIframe);
		            }
		            
		            // Finally, notify the caller
		            callback(errorValue, oauthValue);
		        },
		        handlePostMessage = function(evt) {
		            // Validate source
		            var expectedSource = useIntermediateIframe ? intermediateIframe.contentWindow : loginWindow;
		            if (evt.source !== expectedSource) {
		                return;
		            }
		
		            // Parse message
		            var envelope;
		            try {
		                envelope = JSON.parse(evt.data);
		            } catch(ex) {
		                // Not JSON - it's not for us. Ignore it and keep waiting for the next message.
		                return;
		            }
		
		            // Process message only if it's for us
		            if (envelope && envelope.type === "LoginCompleted" && (envelope.oauth || envelope.error)) {
		                complete(envelope.error, envelope.oauth);
		            }
		        },
		        checkForWindowClosedInterval = window.setInterval(function() {
		            // We can't directly catch any "onclose" event from the popup because it's usually on a different
		            // origin, but in all the mainstream browsers we can poll for changes to its "closed" property
		            if (loginWindow && loginWindow.closed === true) {
		                complete("canceled", null);
		            }
		        }, 250);
		
		    if (window.addEventListener) {
		        window.addEventListener("message", handlePostMessage, false);
		    } else {
		        // For IE8
		        window.attachEvent("onmessage", handlePostMessage);
		    }
		    
		    // Permit cancellation, e.g., if the app tries to login again while the popup is still open
		    return {
		        cancelCallback: function () {
		            complete("canceled", null);
		            return true; // Affirm that it was cancelled
		        }
		    };
		};
		
		function createIntermediateIframeForLogin(runtimeOrigin, completionOrigin) {
		    var frame = document.createElement("iframe");
		    frame.name = "zumo-login-receiver"; // loginviaiframe.html specifically looks for this name
		    frame.src = runtimeOrigin +
		        "/crossdomain/loginreceiver?completion_origin=" + encodeURIComponent(completionOrigin);
		    frame.setAttribute("width", 0);
		    frame.setAttribute("height", 0);
		    frame.style.display = "none";
		    document.body.appendChild(frame);
		    return frame;
		}
	};

	$__modules__.CordovaPopup = function (exports) {
		// ----------------------------------------------------------------------------
		// Copyright (c) Microsoft Corporation. All rights reserved.
		// ----------------------------------------------------------------------------
		
		// Note: Cordova is PhoneGap.
		// This login UI implementation uses the InAppBrowser plugin,
		// to install the plugin use the following command
		//   cordova plugin add org.apache.cordova.inappbrowser
		
		var requiredCordovaVersion = { major: 3, minor: 0 };
		
		exports.supportsCurrentRuntime = function () {
		    /// <summary>
		    /// Determines whether or not this login UI is usable in the current runtime.
		    /// </summary>
		
		    // When running application inside of Ripple emulator, InAppBrowser functionality is not supported.
		    // We should use Browser popup login method instead.
		    return !!currentCordovaVersion() && !isRunUnderRippleEmulator();
		};
		
		exports.login = function (startUri, endUri, callback) {
		    /// <summary>
		    /// Displays the login UI and calls back on completion
		    /// </summary>
		
		    // Ensure it's a sufficiently new version of Cordova, and if not fail synchronously so that
		    // the error message will show up in the browser console.
		    var foundCordovaVersion = currentCordovaVersion(),
		        message;
		
		    if (!isSupportedCordovaVersion(foundCordovaVersion)) {
		        message = "Not a supported version of Cordova. Detected: " + foundCordovaVersion +
		                    ". Required: " + requiredCordovaVersion.major + "." + requiredCordovaVersion.minor;
		        throw new Error(message);
		    }
		    if (!hasInAppBrowser) {
		        message = 'A required plugin: "org.apache.cordova.inappbrowser" was not detected.';
		        throw new Error(message);
		    }
		
		    // Initially we show a page with a spinner. This stays on screen until the login form has loaded.
		    var redirectionScript = "<script>location.href = unescape('" + window.escape(startUri) + "')</script>",
		        startPage = "data:text/html," + encodeURIComponent(getSpinnerMarkup() + redirectionScript);
		
		    // iOS inAppBrowser issue requires this wrapping
		    setTimeout(function () {
		        var loginWindow = window.open(startPage, "_blank", "location=no"),
		            flowHasFinished = false,
		            loadEventHandler = function (evt) {
		                if (!flowHasFinished && evt.url.indexOf(endUri) === 0) {
		                    flowHasFinished = true;
		                    setTimeout(function () {
		                        loginWindow.close();
		                    }, 500);
		                    var result = parseOAuthResultFromDoneUrl(evt.url);
		                    callback(result.error, result.oAuthToken);
		                }
		            };
		
		        // Ideally we'd just use loadstart because it happens earlier, but it randomly skips
		        // requests on iOS, so we have to listen for loadstop as well (which is reliable).
		        loginWindow.addEventListener('loadstart', loadEventHandler);
		        loginWindow.addEventListener('loadstop', loadEventHandler);
		
		        loginWindow.addEventListener('exit', function (evt) {
		            if (!flowHasFinished) {
		                flowHasFinished = true;
		                callback("UserCancelled", null);
		            }
		        });
		    }, 500);
		};
		
		function isRunUnderRippleEmulator () {
		    // Returns true when application runs under Ripple emulator 
		    return window.parent && !!window.parent.ripple;
		}
		
		function currentCordovaVersion() {
		    // If running inside Cordova, returns a string similar to "3.5.0". Otherwise, returns a falsey value.
		    // Note: We can only detect Cordova after its deviceready event has fired, so don't call login until then.
		    return window.cordova && window.cordova.version;
		}
		
		function isSupportedCordovaVersion(version) {
		    var versionParts = currentCordovaVersion().match(/^(\d+).(\d+)./);
		    if (versionParts) {
		        var major = Number(versionParts[1]),
		            minor = Number(versionParts[2]),
		            required = requiredCordovaVersion;
		        return (major > required.major) ||
		               (major === required.major && minor >= required.minor);
		    }
		    return false;
		}
		
		function hasInAppBrowser() {
		    return !window.open;
		}
		
		function parseOAuthResultFromDoneUrl(url) {
		    var successMessage = extractMessageFromUrl(url, "#token="),
		        errorMessage = extractMessageFromUrl(url, "#error=");
		    return {
		        oAuthToken: successMessage ? JSON.parse(successMessage) : null,
		        error: errorMessage
		    };
		}
		
		function extractMessageFromUrl(url, separator) {
		    var pos = url.indexOf(separator);
		    return pos < 0 ? null : decodeURIComponent(url.substring(pos + separator.length));
		}
		
		function getSpinnerMarkup() {
		    // The default InAppBrowser experience isn't ideal, as it just shows the user a blank white screen
		    // until the login form appears. This might take 10+ seconds during which it looks broken.
		    // Also on iOS it's possible for the InAppBrowser to initially show the results of the *previous*
		    // login flow if the InAppBrowser was dismissed before completion, which is totally undesirable.
		    // To fix both of these problems, we display a simple "spinner" graphic via a data: URL until
		    // the current login screen has loaded. We generate the spinner via CSS rather than referencing
		    // an animated GIF just because this makes the client library smaller overall.
		    var vendorPrefix = "webkitTransform" in document.documentElement.style ? "-webkit-" : "",
		        numSpokes = 12,
		        spokesMarkup = "";
		    for (var i = 0; i < numSpokes; i++) {
		        spokesMarkup += "<div style='-prefix-transform: rotateZ(" + (180 + i * 360 / numSpokes) + "deg);" +
		                                    "-prefix-animation-delay: " + (0.75 * i / numSpokes) + "s;'></div>";
		    }
		    return [
		        "<!DOCTYPE html><html>",
		        "<head><meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1'></head>",
		        "<body><div id='spinner'>" + spokesMarkup + "</div>",
		        "<style type='text/css'>",
		        "    #spinner { position: absolute; top: 50%; left: 50%; -prefix-animation: spinner 10s linear infinite; }",
		        "    #spinner > div {",
		        "        background: #333; opacity: 0; position: absolute; top: 11px; left: -2px; width: 4px; height: 21px; border-radius: 2px;",
		        "        -prefix-transform-origin: 50% -11px; -prefix-animation: spinner-spoke 0.75s linear infinite;",
		        "    }",
		        "    @-prefix-keyframes spinner { 0% { -prefix-transform: rotateZ(0deg); } 100% { -prefix-transform: rotateZ(-360deg); } }",
		        "    @-prefix-keyframes spinner-spoke { 0% { opacity: 0; } 5% { opacity: 1; } 70% { opacity: 0; } 100% { opacity: 0; } }",
		        "</style>",
		        "</body></html>"
		    ].join("").replace(/-prefix-/g, vendorPrefix);
		}
	};

	$__modules__.WebAuthBroker = function (exports) {
		// ----------------------------------------------------------------------------
		// Copyright (c) Microsoft Corporation. All rights reserved.
		// ----------------------------------------------------------------------------
		
		var _ = require('Extensions'),
		    easyAuthRedirectUriKey = 'post_login_redirect_url';
		
		exports.supportsCurrentRuntime = function () {
		    /// <summary>
		    /// Determines whether or not this login UI is usable in the current runtime.
		    /// </summary>
		
		    return isWebAuthBrokerAvailable();
		};
		
		exports.login = function (startUri, endUri, callback) {
		    /// <summary>
		    /// Displays the login UI and calls back on completion
		    /// </summary>
		
		    // Define shortcuts for namespaces
		    var windowsWebAuthBroker = Windows.Security.Authentication.Web.WebAuthenticationBroker;
		    var noneWebAuthOptions = Windows.Security.Authentication.Web.WebAuthenticationOptions.none;
		    var successWebAuthStatus = Windows.Security.Authentication.Web.WebAuthenticationStatus.success;
		    var activationKindWebAuthContinuation = Windows.ApplicationModel.Activation.ActivationKind.webAuthenticationBrokerContinuation;
		
		    var webAuthBrokerSuccessCallback = null;
		    var webAuthBrokerErrorCallback = null;
		    var webAuthBrokerContinuationCallback = null;
		
		
		    // define callbacks for WebAuthenticationBroker
		    webAuthBrokerSuccessCallback = function (result) {
		        var error = null;
		        var token = null;
		
		        if (result.responseStatus !== successWebAuthStatus) {
		            error = result;
		        }
		        else {
		            var callbackEndUri = result.responseData;
		            var tokenAsJson = null;
		            var i = callbackEndUri.indexOf('#token=');
		            if (i > 0) {
		                tokenAsJson = decodeURIComponent(callbackEndUri.substring(i + 7));
		            }
		            else {
		                i = callbackEndUri.indexOf('#error=');
		                if (i > 0) {
		                    error = decodeURIComponent(callbackEndUri.substring(i + 7));
		                }
		            }
		
		            if (tokenAsJson !== null) {
		                try {
		                    token = JSON.parse(tokenAsJson);
		                }
		                catch (e) {
		                    error = e;
		                }
		            }
		        }
		
		        callback(error, token);
		    };
		    webAuthBrokerErrorCallback = function (error) {
		        callback(error, null);
		    };
		    // Continuation callback is used when we're running on WindowsPhone which uses 
		    // AuthenticateAndContinue method instead of AuthenticateAsync, which uses different async model
		    // Continuation callback need to be assigned to Application's 'activated' event.
		    webAuthBrokerContinuationCallback = function (activationArgs) {
		        if (activationArgs.detail.kind === activationKindWebAuthContinuation) {
		            var result = activationArgs.detail.webAuthenticationResult;
		            if (result.responseStatus == successWebAuthStatus) {
		                webAuthBrokerSuccessCallback(result);
		            } else {
		                webAuthBrokerErrorCallback(result);
		            }
		            WinJS.Application.removeEventListener('activated', webAuthBrokerContinuationCallback);
		        }
		    };
		
		    // If no endURI was given, we construct the startUri with a redirect parameter 
		    // pointing to the app SID for single sign on.
		    // Single sign-on requires that the application's Package SID 
		    // be registered with the Microsoft Azure Mobile Service, but it provides a better 
		    // experience as HTTP cookies are supported so that users do not have to
		    // login in everytime the application is launched.
		    if (endUri) {
		        endUri = new Windows.Foundation.Uri(endUri);
		    } else {
		        var ssoQueryParameter = {},
		            redirectUri = windowsWebAuthBroker.getCurrentApplicationCallbackUri().absoluteUri;
		
		        ssoQueryParameter[easyAuthRedirectUriKey] = redirectUri;
		        startUri = _.url.combinePathAndQuery(startUri, _.url.getQueryString(ssoQueryParameter));
		    }
		    
		    startUri = new Windows.Foundation.Uri(startUri);
		    
		    // If authenticateAndContinue method is available, we should use it instead of authenticateAsync.
		    // In the event that it exists, but fails (which is the case with Win 10), we fallback to authenticateAsync.
		    var isLoginWindowLaunched;
		    try {
		        WinJS.Application.addEventListener('activated', webAuthBrokerContinuationCallback, true);
		        windowsWebAuthBroker.authenticateAndContinue(startUri, endUri);
		
		        isLoginWindowLaunched = true;
		    } catch (ex) {
		        WinJS.Application.removeEventListener('activated', webAuthBrokerContinuationCallback);
		    }
		
		    if (!isLoginWindowLaunched) {
		        windowsWebAuthBroker.authenticateAsync(noneWebAuthOptions, startUri, endUri)
		        .done(webAuthBrokerSuccessCallback, webAuthBrokerErrorCallback);
		    }
		};
		
		function isWebAuthBrokerAvailable() {
		    // If running on windows8/8.1 or Windows Phone returns true, otherwise false
		    return !!(window.Windows &&
		        window.Windows.Security &&
		        window.Windows.Security.Authentication &&
		        window.Windows.Security.Authentication.Web &&
		        window.Windows.Security.Authentication.Web.WebAuthenticationBroker);
		}
		
	};

	$__modules__.PostMessageExchange = function (exports) {
		// ----------------------------------------------------------------------------
		// Copyright (c) Microsoft Corporation. All rights reserved.
		// ----------------------------------------------------------------------------
		
		// window.postMessage does not have a concept of responses, so this class associates messages
		// with IDs so that we can identify which message a reply refers to.
		
		var Promises = require('Promises'),
		    messageTimeoutDuration = 5 * 60 * 1000; // If no reply after 5 mins, surely there will be no reply
		
		function PostMessageExchange() {
		    var self = this;
		    self._lastMessageId = 0;
		    self._hasListener = false;
		    self._pendingMessages = {};
		}
		
		PostMessageExchange.prototype.request = function (targetWindow, messageData, origin) {
		    /// <summary>
		    /// Issues a request to the target window via postMessage
		    /// </summary>
		    /// <param name="targetWindow" type="Object">
		    /// The window object (on an actual window, or iframe) to send the request to
		    /// </param>
		    /// <param name="messageData" type="Object">
		    /// A JSON-serializable object to pass to the target
		    /// </param>
		    /// <param name="origin" type="String">
		    /// The expected origin (e.g., "http://example.com:81") of the recipient window.
		    /// If at runtime the origin does not match, the request will not be issued.
		    /// </param>
		    /// <returns type="Object">
		    /// A promise that completes once the target window sends back a reply, with
		    /// value equal to that reply.
		    /// </returns>
		
		    var self = this,
		        messageId = ++self._lastMessageId,
		        envelope = { messageId: messageId, contents: messageData };
		
		    self._ensureHasListener();
		
		    return new Promises.Promise(function (complete, error) {
		        // Track callbacks and origin data so we can complete the promise only for valid replies
		        self._pendingMessages[messageId] = {
		            messageId: messageId,
		            complete: complete,
		            error: error,
		            targetWindow: targetWindow,
		            origin: origin
		        };
		
		        // Don't want to leak memory, so if there's no reply, forget about it eventually
		        self._pendingMessages[messageId].timeoutId = global.setTimeout(function () {
		            var pendingMessage = self._pendingMessages[messageId];
		            if (pendingMessage) {
		                delete self._pendingMessages[messageId];
		                pendingMessage.error({ status: 0, statusText: "Timeout", responseText: null });
		            }
		        }, messageTimeoutDuration);
		
		        targetWindow.postMessage(JSON.stringify(envelope), origin);
		    });
		};
		
		PostMessageExchange.prototype._ensureHasListener = function () {
		    if (this._hasListener) {
		        return;
		    }
		    this._hasListener = true;
		
		    var self = this,
		        boundHandleMessage = function () {
		            self._handleMessage.apply(self, arguments);
		        };
		
		    if (window.addEventListener) {
		        window.addEventListener('message', boundHandleMessage, false);
		    } else {
		        // For IE8
		        window.attachEvent('onmessage', boundHandleMessage);
		    }
		};
		
		PostMessageExchange.prototype._handleMessage = function (evt) {
		    var envelope = this._tryDeserializeMessage(evt.data),
		        messageId = envelope && envelope.messageId,
		        pendingMessage = messageId && this._pendingMessages[messageId],
		        isValidReply = pendingMessage && pendingMessage.targetWindow === evt.source &&
		                       pendingMessage.origin === getOriginRoot(evt.origin);
		    
		    if (isValidReply) {
		        global.clearTimeout(pendingMessage.timeoutId); // No point holding this in memory until the timeout expires
		        delete this._pendingMessages[messageId];
		        pendingMessage.complete(envelope.contents);
		    }
		};
		
		PostMessageExchange.prototype._tryDeserializeMessage = function (messageString) {
		    if (!messageString || typeof messageString !== 'string') {
		        return null;
		    }
		
		    try {
		        return JSON.parse(messageString);
		    } catch (ex) {
		        // It's not JSON, so it's not a message for us. Ignore it.
		        return null;
		    }
		};
		
		function getOriginRoot(url) {
		    // Returns the proto/host/port part of a URL, i.e., the part that defines the access boundary
		    // for same-origin policy. This is of the form "protocol://host:port", where ":port" is omitted
		    // if it is the default port for that protocol.
		    var parsedUrl = parseUrl(url),
		        portString = parsedUrl.port ? parsedUrl.port.toString() : null,
		        isDefaultPort = (parsedUrl.protocol === 'http:' && portString === '80') ||
		                        (parsedUrl.protocol === 'https:' && portString === '443'),
		        portSuffix = (portString && !isDefaultPort) ? ':' + portString : '';
		    return parsedUrl.protocol + '//' + parsedUrl.hostname + portSuffix;
		}
		
		function parseUrl(url) {
		    // https://gist.github.com/2428561 - works on IE8+. Could switch to a more manual, less magic
		    // parser in the future if we need to support IE < 8.
		    var elem = global.document.createElement('a');
		    elem.href = url;
		    return elem;
		}
		
		exports.instance = new PostMessageExchange();
		exports.getOriginRoot = getOriginRoot;
	};

	$__modules__.Promises = function (exports) {
		// ----------------------------------------------------------------------------
		// Copyright (c) Microsoft Corporation. All rights reserved.
		// ----------------------------------------------------------------------------
		
		// In WinJS, we use WinJS.Promise.
		// There's no native equivalent for regular JavaScript in the browser, so we implement it here.
		// This implementation conforms to Promises/A+, making it compatible with WinJS.Promise.
		
		// Note: There is a standard Promises/A+ test suite, to which this implementation conforms.
		// See test\Microsoft.Azure.Zumo.Web.Test\promiseTests
		
		// Declare JSHint globals
		/*global setTimeout:false */
		
		(function (exports) {
		    "use strict";
		
		    var resolutionState = { success: {}, error: {} },
		        bind = function (func, target) { return function () { func.apply(target, arguments); }; }, // Older browsers lack Function.prototype.bind
		        isGenericPromise = function (obj) { return obj && (typeof obj.then === "function"); };
		
		    function Promise(init) {
		        this._callbackFrames = [];
		        this._resolutionState = null;
		        this._resolutionValueOrError = null;
		        this._resolveSuccess = bind(this._resolveSuccess, this);
		        this._resolveError = bind(this._resolveError, this);
		
		        if (init) {
		            init(this._resolveSuccess, this._resolveError);
		        }
		    }
		
		    Promise.prototype.then = function (success, error) {
		        var callbackFrame = { success: success, error: error, chainedPromise: new Promise() };
		
		        // If this promise is already resolved, invoke callbacks immediately. Otherwise queue them.
		        if (this._resolutionState) {
		            this._invokeCallback(callbackFrame);
		        } else {
		            this._callbackFrames.push(callbackFrame);
		        }
		
		        return callbackFrame.chainedPromise;
		    };
		
		    Promise.prototype._resolveSuccess = function (val) { this._resolve(resolutionState.success, val); };
		    Promise.prototype._resolveError = function (err) { this._resolve(resolutionState.error, err); };
		
		    Promise.prototype._resolve = function (state, valueOrError) {
		        if (this._resolutionState) {
		            // Can't affect resolution state when already resolved. We silently ignore the request, without throwing an error,
		            // to prevent concurrent resolvers from affecting each other during race conditions.
		            return;
		        }
		
		        this._resolutionState = state;
		        this._resolutionValueOrError = valueOrError;
		
		        // Notify all queued callbacks
		        for (var i = 0, j = this._callbackFrames.length; i < j; i++) {
		            this._invokeCallback(this._callbackFrames[i]);
		        }
		    };
		
		    Promise.prototype._invokeCallback = function (frame) {
		        var callbackToInvoke = this._resolutionState === resolutionState.success ? frame.success : frame.error;
		        if (typeof callbackToInvoke === "function") {
		            // Call the supplied callback either to transform the result (for success) or to handle the error (for error)
		            // The setTimeout ensures handlers are always invoked asynchronosly, even if the promise was already resolved,
		            // to avoid callers having to differentiate between sync/async cases
		            setTimeout(bind(function () {
		                var passthroughValue, passthroughState, callbackDidNotThrow = true;
		                try {
		                    passthroughValue = callbackToInvoke(this._resolutionValueOrError);
		                    passthroughState = resolutionState.success;
		                } catch (ex) {
		                    callbackDidNotThrow = false;
		                    passthroughValue = ex;
		                    passthroughState = resolutionState.error;
		                }
		
		                if (callbackDidNotThrow && isGenericPromise(passthroughValue)) {
		                    // By returning a futher promise from a callback, you can insert it into the chain. This is the basis for composition.
		                    // This rule is in the Promises/A+ spec, but not Promises/A.
		                    passthroughValue.then(frame.chainedPromise._resolveSuccess, frame.chainedPromise._resolveError);
		                } else {
		                    frame.chainedPromise._resolve(passthroughState, passthroughValue);
		                }
		            }, this), 1);
		        } else {
		            // No callback of the applicable type, so transparently pass existing state/value down the chain
		            frame.chainedPromise._resolve(this._resolutionState, this._resolutionValueOrError);
		        }
		    };
		
		    // -----------
		    // Everything from here on is extensions beyond the Promises/A+ spec intended to ease code
		    // sharing between WinJS and browser-based Mobile Services apps
		
		    Promise.prototype.done = function (success, error) {
		        this.then(success, error).then(null, function(err) {
		            // "done" throws any final errors as global uncaught exceptions. The setTimeout
		            // ensures the exception won't get caught in the Promises machinery or user code.
		            setTimeout(function () { throw new Error(err); }, 1);
		        });
		        return undefined; // You can't chain onto a .done()
		    };
		
		    // Note that we're not implementing any of the static WinJS.Promise.* functions because
		    // the Mobile Services client doesn't even expose any static "Promise" object that you
		    // could reference static functions on. Developers who want to use any of the WinJS-style
		    // static functions (any, join, theneach, ...) can use any Promises/A-compatible library
		    // such as when.js.
		    //
		    // Additionally, we don't implement .cancel() yet because Mobile Services operations don't
		    // support cancellation in WinJS yet either. This could be added to both WinJS and Web
		    // client libraries in the future.
		
		    exports.Promise = Promise;
		})(exports);
	};
	require('MobileServiceClient');
})(this || exports);