export default {
    parserPreset: {
        parserOpts: {
            headerPattern: /^(\p{Emoji_Presentation}|\p{Emoji}\uFE0F?)\s*(\w+)(?:$(.*)$)?!?:\s(.*)$/u,
            headerCorrespondence: ['emoji', 'type', 'scope', 'subject'],
        },
    },
    rules: {
        'type-enum': [
            2,
            'always',
            [
                'fix', 'feat', 'docs', 'style', 'refactor', 'perf', 'test',
                'build', 'ci', 'revert', 'dump', 'hotfix', 'deploy', 'ui',
                'init', 'security', 'secret', 'bump', 'fix-lint', 'wip',
                'dep-drop', 'dep-bump', 'pin', 'analytics', 'dep-add',
                'dep-rm', 'config', 'script', 'lang', 'typo', 'poop',
                'merge', 'package', 'external', 'resource', 'license',
                'boom', 'asset', 'accessibility', 'source-docs', 
                'beer', 'text', 'db', 'logs-add', 'logs-rm',
                'people', 'ux', 'arch', 'design', 'mock',
                'egg', 'ignore', 'snap', 'experiment',
                'seo', 'types', 'seed',  'flag',
                'catch','animation','deprecation','auth',
                'fix-simple','exploration','dead','test-fail',
                'logic','health','infra','devxp',
                'money','threading','validation','chore'
            ],
        ],
    },
};
