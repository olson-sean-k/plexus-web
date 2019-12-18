#! /usr/bin/env python3

import glob

from bs4 import BeautifulSoup


def parse(path):
    with open(path) as document:
        return BeautifulSoup(document, features='html5lib')


def patch(template, document):
    # TODO: Implement this.
    # TODO: Some `rustdoc` documents have no `<title>` and redirect. Skip these
    #       documents.
    template.head.title.string = u'{} - Plexus'.format(
            document.head.title.string.split(' - ')[0])
    content = template.find('div', attrs={'class': 'md-content'})
    content.clear()


def main():
    template = parse('./out/template.html')
    for path in glob.iglob(
            './out/doc/rustdoc/plexus/**/*.html',
            recursive=True):
        document = parse(path)
        #patch(template, document)


if __name__ == '__main__':
    main()
