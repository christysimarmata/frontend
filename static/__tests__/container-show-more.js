import bonzo from 'bonzo';
import qwery from 'qwery';
import containerShowMore from 'facia/modules/ui/container-show-more';
import intersection from 'lodash/arrays/intersection';
import keys from 'lodash/objects/keys';

describe('Container Show More', () => {
    let $container;

    function itemWithId(id) {
        return `<div class="js-fc-item" data-id="${id}"></div>`;
    }

    beforeEach(() => {
        $container = bonzo(bonzo.create(
            `<div>${
            itemWithId('loldongs')
            }${itemWithId('corgi')
            }${itemWithId('geekpie')
            }</div>`
        ));
    });

    afterEach(() => {
        $container.remove();
    });

    it('should be able to group elements by id', () => {
        const grouped = containerShowMore.itemsByArticleId($container);

        expect(intersection(keys(grouped), ['loldongs', 'corgi', 'geekpie']).length === 3).toBeTruthy();
    });

    it('should de-duplicate items loaded in', () => {
        const $after = containerShowMore.dedupShowMore($container,
            `<div>${
            itemWithId('corgi')
            }${itemWithId('daschund')
            }</div>`
        );

        expect(qwery('.js-fc-item', $after).length === 1).toBeTruthy();
    });
});
