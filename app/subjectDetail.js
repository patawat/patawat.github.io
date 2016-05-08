System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var SubjectDetail;
    return {
        setters:[],
        execute: function() {
            SubjectDetail = (function () {
                function SubjectDetail() {
                    this.name = { th: String, en: String };
                    this.credit = { seft: String, lab: String, total: String, lecture: String };
                    this.description = { th: String, en: String };
                }
                return SubjectDetail;
            }());
            exports_1("SubjectDetail", SubjectDetail);
        }
    }
});
//# sourceMappingURL=subjectDetail.js.map