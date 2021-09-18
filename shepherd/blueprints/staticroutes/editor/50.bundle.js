(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{554:function(e,n,t){"use strict";t.r(n),t.d(n,"setupMode",(function(){return be}));var r,i,o,a,u,c,s,d,f,l,g,h,p,m,v,b=monaco.Promise,y=function(){function e(e){var n=this;this._defaults=e,this._worker=null,this._idleCheckInterval=setInterval((function(){return n._checkIfIdle()}),3e4),this._lastUsedTime=0,this._configChangeListener=this._defaults.onDidChange((function(){return n._stopWorker()}))}return e.prototype._stopWorker=function(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null},e.prototype.dispose=function(){clearInterval(this._idleCheckInterval),this._configChangeListener.dispose(),this._stopWorker()},e.prototype._checkIfIdle=function(){this._worker&&(Date.now()-this._lastUsedTime>12e4&&this._stopWorker())},e.prototype._getClient=function(){return this._lastUsedTime=Date.now(),this._client||(this._worker=monaco.editor.createWebWorker({moduleId:"vs/language/css/cssWorker",label:this._defaults.languageId,createData:{languageSettings:this._defaults.diagnosticsOptions,languageId:this._defaults.languageId}}),this._client=this._worker.getProxy()),this._client},e.prototype.getLanguageServiceWorker=function(){for(var e,n=this,t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return _(this._getClient().then((function(n){e=n})).then((function(e){return n._worker.withSyncedResources(t)})).then((function(n){return e})))},e}();function _(e){var n,t,r=new b((function(e,r){n=e,t=r}),(function(){}));return e.then(n,t),r}!function(e){e.create=function(e,n){return{line:e,character:n}},e.is=function(e){var n=e;return $.objectLiteral(n)&&$.number(n.line)&&$.number(n.character)}}(r||(r={})),function(e){e.create=function(e,n,t,i){if($.number(e)&&$.number(n)&&$.number(t)&&$.number(i))return{start:r.create(e,n),end:r.create(t,i)};if(r.is(e)&&r.is(n))return{start:e,end:n};throw new Error("Range#create called with invalid arguments["+e+", "+n+", "+t+", "+i+"]")},e.is=function(e){var n=e;return $.objectLiteral(n)&&r.is(n.start)&&r.is(n.end)}}(i||(i={})),function(e){e.create=function(e,n){return{uri:e,range:n}},e.is=function(e){var n=e;return $.defined(n)&&i.is(n.range)&&($.string(n.uri)||$.undefined(n.uri))}}(o||(o={})),function(e){e.create=function(e,n,t,r){return{red:e,green:n,blue:t,alpha:r}},e.is=function(e){var n=e;return $.number(n.red)&&$.number(n.green)&&$.number(n.blue)&&$.number(n.alpha)}}(a||(a={})),function(e){e.create=function(e,n){return{range:e,color:n}},e.is=function(e){var n=e;return i.is(n.range)&&a.is(n.color)}}(u||(u={})),function(e){e.create=function(e,n,t){return{label:e,textEdit:n,additionalTextEdits:t}},e.is=function(e){var n=e;return $.string(n.label)&&($.undefined(n.textEdit)||p.is(n))&&($.undefined(n.additionalTextEdits)||$.typedArray(n.additionalTextEdits,p.is))}}(c||(c={})),function(e){e.Comment="comment",e.Imports="imports",e.Region="region"}(s||(s={})),function(e){e.create=function(e,n,t,r,i){var o={startLine:e,endLine:n};return $.defined(t)&&(o.startCharacter=t),$.defined(r)&&(o.endCharacter=r),$.defined(i)&&(o.kind=i),o},e.is=function(e){var n=e;return $.number(n.startLine)&&$.number(n.startLine)&&($.undefined(n.startCharacter)||$.number(n.startCharacter))&&($.undefined(n.endCharacter)||$.number(n.endCharacter))&&($.undefined(n.kind)||$.string(n.kind))}}(d||(d={})),function(e){e.create=function(e,n){return{location:e,message:n}},e.is=function(e){var n=e;return $.defined(n)&&o.is(n.location)&&$.string(n.message)}}(f||(f={})),function(e){e.Error=1,e.Warning=2,e.Information=3,e.Hint=4}(l||(l={})),function(e){e.create=function(e,n,t,r,i,o){var a={range:e,message:n};return $.defined(t)&&(a.severity=t),$.defined(r)&&(a.code=r),$.defined(i)&&(a.source=i),$.defined(o)&&(a.relatedInformation=o),a},e.is=function(e){var n=e;return $.defined(n)&&i.is(n.range)&&$.string(n.message)&&($.number(n.severity)||$.undefined(n.severity))&&($.number(n.code)||$.string(n.code)||$.undefined(n.code))&&($.string(n.source)||$.undefined(n.source))&&($.undefined(n.relatedInformation)||$.typedArray(n.relatedInformation,f.is))}}(g||(g={})),function(e){e.create=function(e,n){for(var t=[],r=2;r<arguments.length;r++)t[r-2]=arguments[r];var i={title:e,command:n};return $.defined(t)&&t.length>0&&(i.arguments=t),i},e.is=function(e){var n=e;return $.defined(n)&&$.string(n.title)&&$.string(n.command)}}(h||(h={})),function(e){e.replace=function(e,n){return{range:e,newText:n}},e.insert=function(e,n){return{range:{start:e,end:e},newText:n}},e.del=function(e){return{range:e,newText:""}},e.is=function(e){var n=e;return $.objectLiteral(n)&&$.string(n.newText)&&i.is(n.range)}}(p||(p={})),function(e){e.create=function(e,n){return{textDocument:e,edits:n}},e.is=function(e){var n=e;return $.defined(n)&&k.is(n.textDocument)&&Array.isArray(n.edits)}}(m||(m={})),function(e){e.is=function(e){var n=e;return n&&(void 0!==n.changes||void 0!==n.documentChanges)&&(void 0===n.documentChanges||$.typedArray(n.documentChanges,m.is))}}(v||(v={}));var w,k,x,C,E,I,T,S,M,P,R,A,D,F,O,L,j,W=function(){function e(e){this.edits=e}return e.prototype.insert=function(e,n){this.edits.push(p.insert(e,n))},e.prototype.replace=function(e,n){this.edits.push(p.replace(e,n))},e.prototype.delete=function(e){this.edits.push(p.del(e))},e.prototype.add=function(e){this.edits.push(e)},e.prototype.all=function(){return this.edits},e.prototype.clear=function(){this.edits.splice(0,this.edits.length)},e}();!function(){function e(e){var n=this;this._textEditChanges=Object.create(null),e&&(this._workspaceEdit=e,e.documentChanges?e.documentChanges.forEach((function(e){var t=new W(e.edits);n._textEditChanges[e.textDocument.uri]=t})):e.changes&&Object.keys(e.changes).forEach((function(t){var r=new W(e.changes[t]);n._textEditChanges[t]=r})))}Object.defineProperty(e.prototype,"edit",{get:function(){return this._workspaceEdit},enumerable:!0,configurable:!0}),e.prototype.getTextEditChange=function(e){if(k.is(e)){if(this._workspaceEdit||(this._workspaceEdit={documentChanges:[]}),!this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for versioned document changes.");var n=e;if(!(r=this._textEditChanges[n.uri])){var t={textDocument:n,edits:i=[]};this._workspaceEdit.documentChanges.push(t),r=new W(i),this._textEditChanges[n.uri]=r}return r}if(this._workspaceEdit||(this._workspaceEdit={changes:Object.create(null)}),!this._workspaceEdit.changes)throw new Error("Workspace edit is not configured for normal text edit changes.");var r;if(!(r=this._textEditChanges[e])){var i=[];this._workspaceEdit.changes[e]=i,r=new W(i),this._textEditChanges[e]=r}return r}}();!function(e){e.create=function(e){return{uri:e}},e.is=function(e){var n=e;return $.defined(n)&&$.string(n.uri)}}(w||(w={})),function(e){e.create=function(e,n){return{uri:e,version:n}},e.is=function(e){var n=e;return $.defined(n)&&$.string(n.uri)&&$.number(n.version)}}(k||(k={})),function(e){e.create=function(e,n,t,r){return{uri:e,languageId:n,version:t,text:r}},e.is=function(e){var n=e;return $.defined(n)&&$.string(n.uri)&&$.string(n.languageId)&&$.number(n.version)&&$.string(n.text)}}(x||(x={})),function(e){e.PlainText="plaintext",e.Markdown="markdown"}(C||(C={})),function(e){e.is=function(n){var t=n;return t===e.PlainText||t===e.Markdown}}(C||(C={})),function(e){e.is=function(e){var n=e;return $.objectLiteral(e)&&C.is(n.kind)&&$.string(n.value)}}(E||(E={})),function(e){e.Text=1,e.Method=2,e.Function=3,e.Constructor=4,e.Field=5,e.Variable=6,e.Class=7,e.Interface=8,e.Module=9,e.Property=10,e.Unit=11,e.Value=12,e.Enum=13,e.Keyword=14,e.Snippet=15,e.Color=16,e.File=17,e.Reference=18,e.Folder=19,e.EnumMember=20,e.Constant=21,e.Struct=22,e.Event=23,e.Operator=24,e.TypeParameter=25}(I||(I={})),function(e){e.PlainText=1,e.Snippet=2}(T||(T={})),function(e){e.create=function(e){return{label:e}}}(S||(S={})),function(e){e.create=function(e,n){return{items:e||[],isIncomplete:!!n}}}(M||(M={})),function(e){e.fromPlainText=function(e){return e.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")},e.is=function(e){var n=e;return $.string(n)||$.objectLiteral(n)&&$.string(n.language)&&$.string(n.value)}}(P||(P={})),function(e){e.is=function(e){var n=e;return $.objectLiteral(n)&&(E.is(n.contents)||P.is(n.contents)||$.typedArray(n.contents,P.is))&&(void 0===e.range||i.is(e.range))}}(R||(R={})),function(e){e.create=function(e,n){return n?{label:e,documentation:n}:{label:e}}}(A||(A={})),function(e){e.create=function(e,n){for(var t=[],r=2;r<arguments.length;r++)t[r-2]=arguments[r];var i={label:e};return $.defined(n)&&(i.documentation=n),$.defined(t)?i.parameters=t:i.parameters=[],i}}(D||(D={})),function(e){e.Text=1,e.Read=2,e.Write=3}(F||(F={})),function(e){e.create=function(e,n){var t={range:e};return $.number(n)&&(t.kind=n),t}}(O||(O={})),function(e){e.File=1,e.Module=2,e.Namespace=3,e.Package=4,e.Class=5,e.Method=6,e.Property=7,e.Field=8,e.Constructor=9,e.Enum=10,e.Interface=11,e.Function=12,e.Variable=13,e.Constant=14,e.String=15,e.Number=16,e.Boolean=17,e.Array=18,e.Object=19,e.Key=20,e.Null=21,e.EnumMember=22,e.Struct=23,e.Event=24,e.Operator=25,e.TypeParameter=26}(L||(L={})),function(e){e.create=function(e,n,t,r,i){var o={name:e,kind:n,location:{uri:r,range:t}};return i&&(o.containerName=i),o}}(j||(j={}));var N,H,K,V,U,z=function(){};!function(e){e.create=function(e,n,t,r,i,o){var a={name:e,detail:n,kind:t,range:r,selectionRange:i};return void 0!==o&&(a.children=o),a},e.is=function(e){var n=e;return n&&$.string(n.name)&&$.string(n.detail)&&$.number(n.kind)&&i.is(n.range)&&i.is(n.selectionRange)&&(void 0===n.deprecated||$.boolean(n.deprecated))&&(void 0===n.children||Array.isArray(n.children))}}(z||(z={})),function(e){e.QuickFix="quickfix",e.Refactor="refactor",e.RefactorExtract="refactor.extract",e.RefactorInline="refactor.inline",e.RefactorRewrite="refactor.rewrite",e.Source="source",e.SourceOrganizeImports="source.organizeImports"}(N||(N={})),function(e){e.create=function(e,n){var t={diagnostics:e};return null!=n&&(t.only=n),t},e.is=function(e){var n=e;return $.defined(n)&&$.typedArray(n.diagnostics,g.is)&&(void 0===n.only||$.typedArray(n.only,$.string))}}(H||(H={})),function(e){e.create=function(e,n,t){var r={title:e};return h.is(n)?r.command=n:r.edit=n,void 0!==t&&(r.kind=t),r},e.is=function(e){var n=e;return n&&$.string(n.title)&&(void 0===n.diagnostics||$.typedArray(n.diagnostics,g.is))&&(void 0===n.kind||$.string(n.kind))&&(void 0!==n.edit||void 0!==n.command)&&(void 0===n.command||h.is(n.command))&&(void 0===n.edit||v.is(n.edit))}}(K||(K={})),function(e){e.create=function(e,n){var t={range:e};return $.defined(n)&&(t.data=n),t},e.is=function(e){var n=e;return $.defined(n)&&i.is(n.range)&&($.undefined(n.command)||h.is(n.command))}}(V||(V={})),function(e){e.create=function(e,n){return{tabSize:e,insertSpaces:n}},e.is=function(e){var n=e;return $.defined(n)&&$.number(n.tabSize)&&$.boolean(n.insertSpaces)}}(U||(U={}));var B=function(){};!function(e){e.create=function(e,n,t){return{range:e,target:n,data:t}},e.is=function(e){var n=e;return $.defined(n)&&i.is(n.range)&&($.undefined(n.target)||$.string(n.target))}}(B||(B={}));var q,J;!function(e){e.create=function(e,n,t,r){return new Q(e,n,t,r)},e.is=function(e){var n=e;return!!($.defined(n)&&$.string(n.uri)&&($.undefined(n.languageId)||$.string(n.languageId))&&$.number(n.lineCount)&&$.func(n.getText)&&$.func(n.positionAt)&&$.func(n.offsetAt))},e.applyEdits=function(e,n){for(var t=e.getText(),r=function e(n,t){if(n.length<=1)return n;var r=n.length/2|0;var i=n.slice(0,r);var o=n.slice(r);e(i,t);e(o,t);var a=0;var u=0;var c=0;for(;a<i.length&&u<o.length;){var s=t(i[a],o[u]);n[c++]=s<=0?i[a++]:o[u++]}for(;a<i.length;)n[c++]=i[a++];for(;u<o.length;)n[c++]=o[u++];return n}(n,(function(e,n){var t=e.range.start.line-n.range.start.line;return 0===t?e.range.start.character-n.range.start.character:t})),i=t.length,o=r.length-1;o>=0;o--){var a=r[o],u=e.offsetAt(a.range.start),c=e.offsetAt(a.range.end);if(!(c<=i))throw new Error("Ovelapping edit");t=t.substring(0,u)+a.newText+t.substring(c,t.length),i=u}return t}}(q||(q={})),function(e){e.Manual=1,e.AfterDelay=2,e.FocusOut=3}(J||(J={}));var $,Q=function(){function e(e,n,t,r){this._uri=e,this._languageId=n,this._version=t,this._content=r,this._lineOffsets=null}return Object.defineProperty(e.prototype,"uri",{get:function(){return this._uri},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"languageId",{get:function(){return this._languageId},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"version",{get:function(){return this._version},enumerable:!0,configurable:!0}),e.prototype.getText=function(e){if(e){var n=this.offsetAt(e.start),t=this.offsetAt(e.end);return this._content.substring(n,t)}return this._content},e.prototype.update=function(e,n){this._content=e.text,this._version=n,this._lineOffsets=null},e.prototype.getLineOffsets=function(){if(null===this._lineOffsets){for(var e=[],n=this._content,t=!0,r=0;r<n.length;r++){t&&(e.push(r),t=!1);var i=n.charAt(r);t="\r"===i||"\n"===i,"\r"===i&&r+1<n.length&&"\n"===n.charAt(r+1)&&r++}t&&n.length>0&&e.push(n.length),this._lineOffsets=e}return this._lineOffsets},e.prototype.positionAt=function(e){e=Math.max(Math.min(e,this._content.length),0);var n=this.getLineOffsets(),t=0,i=n.length;if(0===i)return r.create(0,e);for(;t<i;){var o=Math.floor((t+i)/2);n[o]>e?i=o:t=o+1}var a=t-1;return r.create(a,e-n[a])},e.prototype.offsetAt=function(e){var n=this.getLineOffsets();if(e.line>=n.length)return this._content.length;if(e.line<0)return 0;var t=n[e.line],r=e.line+1<n.length?n[e.line+1]:this._content.length;return Math.max(Math.min(t+e.character,r),t)},Object.defineProperty(e.prototype,"lineCount",{get:function(){return this.getLineOffsets().length},enumerable:!0,configurable:!0}),e}();!function(e){var n=Object.prototype.toString;e.defined=function(e){return void 0!==e},e.undefined=function(e){return void 0===e},e.boolean=function(e){return!0===e||!1===e},e.string=function(e){return"[object String]"===n.call(e)},e.number=function(e){return"[object Number]"===n.call(e)},e.func=function(e){return"[object Function]"===n.call(e)},e.objectLiteral=function(e){return null!==e&&"object"==typeof e},e.typedArray=function(e,n){return Array.isArray(e)&&e.every(n)}}($||($={}));var G=monaco.Uri,X=function(){function e(e,n,t){var r=this;this._languageId=e,this._worker=n,this._disposables=[],this._listener=Object.create(null);var i=function(e){var n,t=e.getModeId();t===r._languageId&&(r._listener[e.uri.toString()]=e.onDidChangeContent((function(){clearTimeout(n),n=setTimeout((function(){return r._doValidate(e.uri,t)}),500)})),r._doValidate(e.uri,t))},o=function(e){monaco.editor.setModelMarkers(e,r._languageId,[]);var n=e.uri.toString(),t=r._listener[n];t&&(t.dispose(),delete r._listener[n])};this._disposables.push(monaco.editor.onDidCreateModel(i)),this._disposables.push(monaco.editor.onWillDisposeModel(o)),this._disposables.push(monaco.editor.onDidChangeModelLanguage((function(e){o(e.model),i(e.model)}))),t.onDidChange((function(e){monaco.editor.getModels().forEach((function(e){e.getModeId()===r._languageId&&(o(e),i(e))}))})),this._disposables.push({dispose:function(){for(var e in r._listener)r._listener[e].dispose()}}),monaco.editor.getModels().forEach(i)}return e.prototype.dispose=function(){this._disposables.forEach((function(e){return e&&e.dispose()})),this._disposables=[]},e.prototype._doValidate=function(e,n){this._worker(e).then((function(n){return n.doValidation(e.toString())})).then((function(t){var r=t.map((function(e){return t="number"==typeof(n=e).code?String(n.code):n.code,{severity:Y(n.severity),startLineNumber:n.range.start.line+1,startColumn:n.range.start.character+1,endLineNumber:n.range.end.line+1,endColumn:n.range.end.character+1,message:n.message,code:t,source:n.source};var n,t})),i=monaco.editor.getModel(e);i.getModeId()===n&&monaco.editor.setModelMarkers(i,n,r)})).done(void 0,(function(e){console.error(e)}))},e}();function Y(e){switch(e){case l.Error:return monaco.MarkerSeverity.Error;case l.Warning:return monaco.MarkerSeverity.Warning;case l.Information:return monaco.MarkerSeverity.Info;case l.Hint:return monaco.MarkerSeverity.Hint;default:return monaco.MarkerSeverity.Info}}function Z(e){if(e)return{character:e.column-1,line:e.lineNumber-1}}function ee(e){if(e)return new monaco.Range(e.start.line+1,e.start.character+1,e.end.line+1,e.end.character+1)}function ne(e){var n=monaco.languages.CompletionItemKind;switch(e){case I.Text:return n.Text;case I.Method:return n.Method;case I.Function:return n.Function;case I.Constructor:return n.Constructor;case I.Field:return n.Field;case I.Variable:return n.Variable;case I.Class:return n.Class;case I.Interface:return n.Interface;case I.Module:return n.Module;case I.Property:return n.Property;case I.Unit:return n.Unit;case I.Value:return n.Value;case I.Enum:return n.Enum;case I.Keyword:return n.Keyword;case I.Snippet:return n.Snippet;case I.Color:return n.Color;case I.File:return n.File;case I.Reference:return n.Reference}return n.Property}function te(e){if(e)return{range:ee(e.range),text:e.newText}}var re=function(){function e(e){this._worker=e}return Object.defineProperty(e.prototype,"triggerCharacters",{get:function(){return[" ",":"]},enumerable:!0,configurable:!0}),e.prototype.provideCompletionItems=function(e,n,t){e.getWordUntilPosition(n);var r=e.uri;return ve(t,this._worker(r).then((function(e){return e.doComplete(r.toString(),Z(n))})).then((function(e){if(e){var n=e.items.map((function(e){var n={label:e.label,insertText:e.insertText,sortText:e.sortText,filterText:e.filterText,documentation:e.documentation,detail:e.detail,kind:ne(e.kind)};return e.textEdit&&(n.range=ee(e.textEdit.range),n.insertText=e.textEdit.newText),e.additionalTextEdits&&(n.additionalTextEdits=e.additionalTextEdits.map(te)),e.insertTextFormat===T.Snippet&&(n.insertText={value:n.insertText}),n}));return{isIncomplete:e.isIncomplete,items:n}}})))},e}();function ie(e){return"string"==typeof e?{value:e}:(n=e)&&"object"==typeof n&&"string"==typeof n.kind?"plaintext"===e.kind?{value:e.value.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}:{value:e.value}:{value:"```"+e.language+"\n"+e.value+"\n```\n"};var n}function oe(e){if(e)return Array.isArray(e)?e.map(ie):[ie(e)]}var ae=function(){function e(e){this._worker=e}return e.prototype.provideHover=function(e,n,t){var r=e.uri;return ve(t,this._worker(r).then((function(e){return e.doHover(r.toString(),Z(n))})).then((function(e){if(e)return{range:ee(e.range),contents:oe(e.contents)}})))},e}();function ue(e){switch(e){case F.Read:return monaco.languages.DocumentHighlightKind.Read;case F.Write:return monaco.languages.DocumentHighlightKind.Write;case F.Text:return monaco.languages.DocumentHighlightKind.Text}return monaco.languages.DocumentHighlightKind.Text}var ce=function(){function e(e){this._worker=e}return e.prototype.provideDocumentHighlights=function(e,n,t){var r=e.uri;return ve(t,this._worker(r).then((function(e){return e.findDocumentHighlights(r.toString(),Z(n))})).then((function(e){if(e)return e.map((function(e){return{range:ee(e.range),kind:ue(e.kind)}}))})))},e}();function se(e){return{uri:G.parse(e.uri),range:ee(e.range)}}var de=function(){function e(e){this._worker=e}return e.prototype.provideDefinition=function(e,n,t){var r=e.uri;return ve(t,this._worker(r).then((function(e){return e.findDefinition(r.toString(),Z(n))})).then((function(e){if(e)return[se(e)]})))},e}(),fe=function(){function e(e){this._worker=e}return e.prototype.provideReferences=function(e,n,t,r){var i=e.uri;return ve(r,this._worker(i).then((function(e){return e.findReferences(i.toString(),Z(n))})).then((function(e){if(e)return e.map(se)})))},e}();var le=function(){function e(e){this._worker=e}return e.prototype.provideRenameEdits=function(e,n,t,r){var i=e.uri;return ve(r,this._worker(i).then((function(e){return e.doRename(i.toString(),Z(n),t)})).then((function(e){return function(e){if(e&&e.changes){var n=[];for(var t in e.changes){for(var r=[],i=0,o=e.changes[t];i<o.length;i++){var a=o[i];r.push({range:ee(a.range),text:a.newText})}n.push({resource:G.parse(t),edits:r})}return{edits:n}}}(e)})))},e}();function ge(e){var n=monaco.languages.SymbolKind;switch(e){case L.File:return n.Array;case L.Module:return n.Module;case L.Namespace:return n.Namespace;case L.Package:return n.Package;case L.Class:return n.Class;case L.Method:return n.Method;case L.Property:return n.Property;case L.Field:return n.Field;case L.Constructor:return n.Constructor;case L.Enum:return n.Enum;case L.Interface:return n.Interface;case L.Function:return n.Function;case L.Variable:return n.Variable;case L.Constant:return n.Constant;case L.String:return n.String;case L.Number:return n.Number;case L.Boolean:return n.Boolean;case L.Array:return n.Array}return n.Function}var he=function(){function e(e){this._worker=e}return e.prototype.provideDocumentSymbols=function(e,n){var t=e.uri;return ve(n,this._worker(t).then((function(e){return e.findDocumentSymbols(t.toString())})).then((function(e){if(e)return e.map((function(e){return{name:e.name,detail:"",containerName:e.containerName,kind:ge(e.kind),range:ee(e.location.range),selectionRange:ee(e.location.range)}}))})))},e}(),pe=function(){function e(e){this._worker=e}return e.prototype.provideDocumentColors=function(e,n){var t=e.uri;return ve(n,this._worker(t).then((function(e){return e.findDocumentColors(t.toString())})).then((function(e){if(e)return e.map((function(e){return{color:e.color,range:ee(e.range)}}))})))},e.prototype.provideColorPresentations=function(e,n,t){var r=e.uri;return ve(t,this._worker(r).then((function(e){return e.getColorPresentations(r.toString(),n.color,function(e){if(e)return{start:{line:e.startLineNumber-1,character:e.startColumn-1},end:{line:e.endLineNumber-1,character:e.endColumn-1}}}(n.range))})).then((function(e){if(e)return e.map((function(e){var n={label:e.label};return e.textEdit&&(n.textEdit=te(e.textEdit)),e.additionalTextEdits&&(n.additionalTextEdits=e.additionalTextEdits.map(te)),n}))})))},e}(),me=function(){function e(e){this._worker=e}return e.prototype.provideFoldingRanges=function(e,n,t){var r=e.uri;return ve(t,this._worker(r).then((function(e){return e.provideFoldingRanges(r.toString(),n)})).then((function(e){if(e)return e.map((function(e){var n={start:e.startLine+1,end:e.endLine+1};return void 0!==e.kind&&(n.kind=function(e){switch(e){case s.Comment:return monaco.languages.FoldingRangeKind.Comment;case s.Imports:return monaco.languages.FoldingRangeKind.Imports;case s.Region:return monaco.languages.FoldingRangeKind.Region}return}(e.kind)),n}))})))},e}();function ve(e,n){return e.onCancellationRequested((function(){return n.cancel()})),n}function be(e){var n=new y(e),t=function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return n.getLanguageServiceWorker.apply(n,[e].concat(t))},r=e.languageId;monaco.languages.registerCompletionItemProvider(r,new re(t)),monaco.languages.registerHoverProvider(r,new ae(t)),monaco.languages.registerDocumentHighlightProvider(r,new ce(t)),monaco.languages.registerDefinitionProvider(r,new de(t)),monaco.languages.registerReferenceProvider(r,new fe(t)),monaco.languages.registerDocumentSymbolProvider(r,new he(t)),monaco.languages.registerRenameProvider(r,new le(t)),monaco.languages.registerColorProvider(r,new pe(t)),monaco.languages.registerFoldingRangeProvider(r,new me(t)),new X(r,t,e)}}}]);