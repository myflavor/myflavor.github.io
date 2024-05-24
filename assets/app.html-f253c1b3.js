import{_ as o,r as s,o as t,c as i,a as e,b as a,d as p,e as r}from"./app-fb59138b.js";const d="/images/app-list.jpg",h="/images/running-list.jpg",c="/images/query-app.jpg",l="/images/new_setting.jpg",g="/images/magisk-multi-config.jpg",f="/images/kernelsu-config.jpg",m={},u=r('<h1 id="使用手册" tabindex="-1"><a class="header-anchor" href="#使用手册" aria-hidden="true">#</a> 使用手册</h1><h4 id="手册版本-3-8-pro" tabindex="-1"><a class="header-anchor" href="#手册版本-3-8-pro" aria-hidden="true">#</a> 手册版本 3.8-Pro</h4><p>通过阅读使用手册，你可以了解到应用相关功能</p><h2 id="应用列表" tabindex="-1"><a class="header-anchor" href="#应用列表" aria-hidden="true">#</a> 应用列表</h2><p>在应用列表，你可以看到已安装应用，以及应用的配置状态</p><ul><li>白名单应用会显示绿色的盾牌</li><li>单一配置时显示配置名称</li><li>多项配置显示更多配置</li></ul><p><img src="'+d+'" alt="应用列表"></p><h3 id="白名单" tabindex="-1"><a class="header-anchor" href="#白名单" aria-hidden="true">#</a> 白名单</h3><p>开启白名单的应用将不会受任何限制，推荐将重要应用加入白名单（如微信)</p><p><strong>注：系统应用全局白名单，在应用列表看不到的应用都被认定为系统应用</strong></p><h3 id="后台播放" tabindex="-1"><a class="header-anchor" href="#后台播放" aria-hidden="true">#</a> 后台播放</h3><p>开启后台播放的应用在播放期间不会被冻结，在暂停播放后的10秒后会被冻结</p><p><strong>注：有声即为播放，并非媒体播放(音乐播放)，部分应用后台后不会主动暂停，开启后将会导致应用无法被冻结</strong></p><h3 id="常驻通知" tabindex="-1"><a class="header-anchor" href="#常驻通知" aria-hidden="true">#</a> 常驻通知</h3><p>开启常驻通知的应用在通知常驻时不会被冻结，当通知被移除后的3秒后会被冻结</p><p><strong>注：部分应用会始终保持常驻后台，将会导致应用无法被冻结（如百度网盘）</strong></p><h3 id="禁用意图" tabindex="-1"><a class="header-anchor" href="#禁用意图" aria-hidden="true">#</a> 禁用意图</h3><p>意图（指挂起意图）功能大体来说包括状态栏操作、桌面小组件等</p><p>源码来看包括以下内容</p><ul><li>发送广播</li><li>启动前台服务</li><li>启动Activity</li></ul><p><strong>注：V3.2为Android13+添加了意图限制，已无需开启，此开关为Android12保留</strong></p><h3 id="网速识别" tabindex="-1"><a class="header-anchor" href="#网速识别" aria-hidden="true">#</a> 网速识别</h3><p>开启网速识别，应用在后台<strong>上传达到100KB/s</strong>或<strong>下载达到300KB/s</strong>将认定为<strong>正在上传或下载，免去冻结</strong></p><p>应用被识别为网络传输后，当<strong>上传降到10KB/s</strong>或<strong>下载降到30KB/s</strong>将认定为<strong>停止上传或下载，3秒后冻结</strong></p><h3 id="特殊情况" tabindex="-1"><a class="header-anchor" href="#特殊情况" aria-hidden="true">#</a> 特殊情况</h3><p>为了更好的用户体验，NoActive会对一些特殊情况进行处理</p><p><strong>带有系统签名的应用、Magisk、输入法应用、Xposed模块</strong>将会默认白名单</p><p>如应用同时开启了<strong>媒体播放和音频播放</strong>，将会被认定为<strong>正在播放音乐，免去冻结</strong></p><p><strong>可见窗口、正在备份、正在定位、正在录音、已连接VPN，已开启无障碍的应用将会免去冻结</strong></p><h2 id="运行列表" tabindex="-1"><a class="header-anchor" href="#运行列表" aria-hidden="true">#</a> 运行列表</h2><p>在运行列表中，你可以看到应用的进程数、冻结数、冻结方式、实际占用内存（来自PS命令的RSS）</p><p><img src="'+h+'" alt="运行列表"></p><p>你也可以点击运行列表的某个APP，查看应用的识别状态</p><p><img src="'+c+'" alt="状态查询"></p><h2 id="应用设置" tabindex="-1"><a class="header-anchor" href="#应用设置" aria-hidden="true">#</a> 应用设置</h2><p><img src="'+l+'" alt="应用设置"></p><h3 id="冻结方式" tabindex="-1"><a class="header-anchor" href="#冻结方式" aria-hidden="true">#</a> 冻结方式</h3><p>你可以根据内核支持选择冻结方式，目前支持以下方式</p><ul><li>API（暂停执行已缓存API，根据内核支持自动，<strong>API存在不可控性</strong>）</li><li>V2（推荐支持的设备使用此模式，<strong>兼容性好效果统一</strong>）</li><li>V1 （非MIUI设备使用存在内存泄露,<strong>V3.2增加了防泄漏补丁降低泄漏</strong>）</li><li>KILL （任何内核都支持的方式，<strong>内存达到一定程度会全解冻</strong>）</li></ul><h3 id="极致模式" tabindex="-1"><a class="header-anchor" href="#极致模式" aria-hidden="true">#</a> 极致模式</h3><p>目前是应用设置中禁用意图的总开关，开启后全局禁用冻结应用的意图</p><p><strong>注：该功能可以作为游戏模式，在游戏的时候开启，减少由解冻导致的CPU开销</strong></p><p><strong>注：V3.2版本对意图增加了限制，此模式已无作用，为Android12保留此功能</strong></p><h3 id="日志输出" tabindex="-1"><a class="header-anchor" href="#日志输出" aria-hidden="true">#</a> 日志输出</h3><ul><li>框架（Lsposed日志）</li><li>文件（/data/system/NoActive/log）</li></ul><h3 id="日志级别" tabindex="-1"><a class="header-anchor" href="#日志级别" aria-hidden="true">#</a> 日志级别</h3><ul><li>调试（关键日志信息，<strong>反馈BUG或分析时开启</strong>）</li><li>信息（常规日志信息，<strong>日常推荐</strong>）</li><li>警告（可能出错的信息，<strong>稳定用于关闭日志</strong>）</li><li>错误（运行出错的信息，<strong>稳定用于关闭日志</strong>）</li></ul><h3 id="多开配置" tabindex="-1"><a class="header-anchor" href="#多开配置" aria-hidden="true">#</a> 多开配置</h3><p><strong>注： 自3.7-Pro起，可直接配置工作资料用户的应用</strong></p><p>如果你需要配置多开应用，你可以将NoActive也多开，并授予NoActive的多开<strong>ROOT权限</strong></p><p>Magisk需要设置多用户模式(推荐由设备所有者管理)</p><p><img src="'+g+'" alt=""></p><p>KernelSU直接授权</p><p><img src="'+f+'" alt=""></p><h3 id="重要程度" tabindex="-1"><a class="header-anchor" href="#重要程度" aria-hidden="true">#</a> 重要程度</h3><p>该功能通过在设置中长按版本号开启或关闭，为应用的后台设置重要程度</p><p><strong>利用已知状态识别正确识别后台顺序，为应用设置oom_adj实现后台优先级</strong></p><p>高：主进程 oom_adj 600-649 子进程 oom_adj 650-699</p><p>中：主进程 oom_adj 700-749 子进程 oom_adj 750-799</p><p>低：主进程 oom_adj 800-899 子进程 oom_adj 900-999</p><p>如依次后台C应用（低）、B应用（中）、A应用（高）</p><p>A应用，后台顺序为1，则主进程 oom_adj 600 子进程 oom_adj 650</p><p>B应用，后台顺序为2，则主进程 oom_adj 700 子进程 oom_adj 750</p><p>C应用，后台顺序为3，则主进程 oom_adj 800 子进程 oom_adj 900</p><p><strong>其内存不足后，将会按照oom_adj从大到小的顺序杀死进程</strong></p><p>依次为C应用子进程、C应用主进程、B应用子进程、B应用主进程、A应用子进程、A应用主进程</p><p><strong>你可以根据自己的需求设置重要程度，以达到更好的后台管理</strong></p><h3 id="命令注入" tabindex="-1"><a class="header-anchor" href="#命令注入" aria-hidden="true">#</a> 命令注入</h3><p>通过配置commandInject为true，可以在pm命令中注入NoActive的命令</p><p>pm freezer query 0#cn.myflv.cn 会返回应用的识别状态</p><p>pm freezer temporaryThaw 0#cn.myflv.cn 可以临时解冻应用3秒</p><h2 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件" aria-hidden="true">#</a> 配置文件</h2><p>配置文件位于/data/system/NoActive/config，采用<strong>JSON格式</strong>，可以通过修改配置文件实现一些特殊功能</p><p>需要注意的是，如果你不懂<strong>JSON格式</strong>请不要修改配置文件，若修改后无法读取，配置文件将重置，配置将丢失</p><h3 id="基础配置" tabindex="-1"><a class="header-anchor" href="#基础配置" aria-hidden="true">#</a> 基础配置</h3><h5 id="配置文件-baseconfig-json" tabindex="-1"><a class="header-anchor" href="#配置文件-baseconfig-json" aria-hidden="true">#</a> 配置文件：<strong>BaseConfig.json</strong></h5><p>logLevel(日志级别): debug(调试)、info(信息)、warn(警告)、error(错误)</p><p>logType(日志输出): xposed(框架)、file(文件)</p><h3 id="高级配置" tabindex="-1"><a class="header-anchor" href="#高级配置" aria-hidden="true">#</a> 高级配置</h3><h5 id="配置文件-advanceconfig-json" tabindex="-1"><a class="header-anchor" href="#配置文件-advanceconfig-json" aria-hidden="true">#</a> 配置文件：<strong>AdvanceConfig.json</strong></h5><p>speedMode(极致模式): true(开)、false(关)</p><h3 id="冻结配置" tabindex="-1"><a class="header-anchor" href="#冻结配置" aria-hidden="true">#</a> 冻结配置</h3><h5 id="配置文件-freezeconfig-json" tabindex="-1"><a class="header-anchor" href="#配置文件-freezeconfig-json" aria-hidden="true">#</a> 配置文件：<strong>FreezeConfig.json</strong></h5><p>freezeMode(冻结方式): api(API)、v2(V2)、v1(V1)、kill(KILL)</p><p>whiteUidSet(白名单): 10000(UID)</p><p>ongoingUidSet(常驻通知): 10000(UID)</p><p>netTransUidSet(网速识别): 10000(UID)</p><p>playUidSet(后台播放): 10000(UID)</p><p>pendingUidSet(禁止意图): 10000(UID)</p><p><s>whiteAppSet(白名单): 0#cn.myflv.cn(用户#应用包名)</s></p><p><s>onGoingSet(常驻通知): 0#cn.myflv.cn(用户#应用包名)</s></p><p><s>netTransAppSet(网速识别): 0#cn.myflv.cn(用户#应用包名)</s></p><p><s>playAppSet(后台播放): 0#cn.myflv.cn(用户#应用包名)</s></p><p><s>blackPendingSet(禁止意图): 0#cn.myflv.cn(用户#应用包名)</s></p><h3 id="大师配置" tabindex="-1"><a class="header-anchor" href="#大师配置" aria-hidden="true">#</a> 大师配置</h3><h5 id="配置文件-masterconfig-json-重启生效" tabindex="-1"><a class="header-anchor" href="#配置文件-masterconfig-json-重启生效" aria-hidden="true">#</a> 配置文件：<strong>MasterConfig.json（重启生效）</strong></h5><p>commandInject(命令注入): true(开)、false(关)</p><p>importantLevel(重要等级): true(开)、false(关)</p><p>skipXposed(Xposed白名单): true(开)、false(关)</p><p>dozeType(深度睡眠类型): off(关)、locked(锁屏)、screenOff(息屏)</p><p>freezeBinder(冻结Binder): true(开)、false(关)</p><p>rotationThaw(轮番解冻): true(开)、false(关)</p><p>rotationInterval(轮番间隔): 360(秒)</p><p>systemAppSet(系统应用): cn.myflv.cn(应用包名)</p><p>userAppSet(用户应用): cn.myflv.cn(应用包名)</p><p>netLink(ReKernel_UNIT): -1(强制关闭)、0(自动检测)、22-26(强制指定)</p><p><s>playCheck(播放检测): v1(旧版)、v2(新版)</s></p><h3 id="重要程度-1" tabindex="-1"><a class="header-anchor" href="#重要程度-1" aria-hidden="true">#</a> 重要程度</h3><h5 id="配置文件-memconfig-json" tabindex="-1"><a class="header-anchor" href="#配置文件-memconfig-json" aria-hidden="true">#</a> 配置文件：<strong>MemConfig.json</strong></h5><p>highPriorityUidSet(高): 10000(UID)</p><p>mediumPriorityUidSet(中): 10000(UID)</p><p>lowPriorityUidSet(低): 10000(UID)</p><p><s>highPriorityAppSet(高): 0#cn.myflv.cn(用户#应用包名)</s></p><p><s>mediumPriorityAppSet(中): 0#cn.myflv.cn(用户#应用包名)</s></p><p><s>lowPriorityAppSet(低): 0#cn.myflv.cn(用户#应用包名)</s></p><h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题" aria-hidden="true">#</a> 常见问题</h2><h3 id="关于付费" tabindex="-1"><a class="header-anchor" href="#关于付费" aria-hidden="true">#</a> 关于付费</h3>',117),_={href:"https://pd.qq.com/s/1xkpmbjwk",target:"_blank",rel:"noopener noreferrer"},x=e("strong",null,"NoActive反馈区",-1),b=e("strong",null,"由反复刷包、改设备模块导致的设备上限问题，且3个月内已清除过一次，需自己承担。",-1),j=e("strong",null,"NoActive开发的初衷是希望安稳的使用手机",-1),v=r('<h3 id="深度睡眠" tabindex="-1"><a class="header-anchor" href="#深度睡眠" aria-hidden="true">#</a> 深度睡眠</h3><p>默认情况下，锁屏60秒后会强制进入深度睡眠，如需息屏后台运行，请通过配置文件关闭深度睡眠</p><p>部分系统深度睡眠会失败，别担心，仅仅是NoActive的深度失眠失败，系统也会在一定时机睡眠</p><p>如果你想要关闭深度睡眠，可以修改MasterConfig.json文件中的dozeType为off</p><h3 id="疑难杂症" tabindex="-1"><a class="header-anchor" href="#疑难杂症" aria-hidden="true">#</a> 疑难杂症</h3><p><strong>无法冻结：</strong> 请查看日志是否有错误信息，如冻结方式不支持等</p><p><strong>解冻卡屏：</strong> 部分内核会出现解冻卡屏，但再次切换至前台可正常，目前无法解决</p><p><strong>文件卡屏：</strong> 该问题为Binder通知未正常导致，请尝试ReKernel</p><h3 id="系统应用" tabindex="-1"><a class="header-anchor" href="#系统应用" aria-hidden="true">#</a> 系统应用</h3><p>为了保证系统稳定，系统应用不会被冻结，你可以修改/data/system/NoActive/config/MasterConfig.json</p><p>通过userAppSet添加用户应用，格式 <strong>应用包名</strong> 例如 com.xiaomi.smarthome</p><h3 id="进程配置" tabindex="-1"><a class="header-anchor" href="#进程配置" aria-hidden="true">#</a> 进程配置</h3><p>由于应用的部分进程未冻结，<strong>可能会与冻结进程进行Binder通信</strong>，导致应用产生很多未知问题</p><p>而杀死进程每次在应用后台后杀死，再次打开时会重新启动，<strong>反反复复杀死进程的开销更大</strong></p><p>所以NoActive设计上是<strong>整体冻结应用</strong>，不会支持白名单进程，也不会支持杀死进程</p>',15);function A(y,S){const n=s("ExternalLinkIcon");return t(),i("div",null,[u,e("p",null,[a("在应用设置中点击支付宝打赏累计满10元的用户可以在"),e("a",_,[a("Android墓碑频道"),p(n)]),x,a(" 发送转账截图，等待一段时间后会将你拉入Pro身份组，随后在频道内私聊myflavor发送你的邮箱获取激活码，邮箱用于后续找回以及处理相关问题，一码一机，不可多设备使用。 正常情况下收到的激活码未绑定设备信息，一旦激活码在设备上激活后，将会绑定设备信息，该激活码只能在这个设备信息上使用，支持刷机，但必须刷机的包信息需要相同。 如果刷机包修改了设备信息，则会导致无法激活，但你刷回原来激活的那个刷机包，依然可以激活。所以我并不推荐在非官方包使用，如果你非要使用，也可以频道内私信myflavor 清除设备信息，但3个月内限制清除一次，"),b,j]),v])}const U=o(m,[["render",A],["__file","app.html.vue"]]);export{U as default};
