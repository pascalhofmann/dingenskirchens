nodejs::install { 'stable':
  version => 'v0.10.21',
}


file { '/usr/local/bin/node':
      ensure => link,
      target => '/usr/local/bin/node-v0.10.21',
    }
