let BannerPrototype = {
  init(message) {
    this.message = message;
    return this;
  },

  displayBanner() {
    console.log([this.horizontalRule(), this.emptyLine(), this.messageLine(), this.emptyLine(), this.horizontalRule()].join("\n"));
  },

  messageLength() {
    return this.message.length;
  },

  horizontalRule() {
    return `+-${'-'.repeat(this.messageLength())}-+`;
  },

  emptyLine() {
    return `| ${' '.repeat(this.messageLength())} |`;
  },

  messageLine() {
    return `| ${this.message} |`;
  },
};

let banner1 = Object.create(BannerPrototype).init('To boldly go where no one has gone before.');
banner1.displayBanner();

let banner2 = Object.create(BannerPrototype).init('');
banner2.displayBanner();