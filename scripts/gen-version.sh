#!/bin/bash
VERSION='2.0.0'
rm -R ./versioned_docs/version-$VERSION
rm ./versioned_sidebars/version-$VERSION-sidebars.json

docusaurus docs:version $VERSION