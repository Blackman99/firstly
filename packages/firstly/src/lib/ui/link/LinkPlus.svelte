<script lang="ts">
  import { tw, type BaseItemLight } from '../..'
  import Icon from '../Icon.svelte'
  import Tooltip from '../Tooltip.svelte'
  import Link from './Link.svelte'

  export let item: BaseItemLight | undefined
  export let noIcon = false
  export let captionSubStyle: 'under' | 'inline' | 'none' = 'under'
</script>

<div class="flex items-center gap-4">
  {#if item}
    {#if item.icon?.data && !noIcon}
      <Tooltip text={item.icon.caption}>
        <Icon
          data={item.icon.data}
          class={tw('flex-shrink-0', item.icon.class)}
          size={item.icon.size}
        />
      </Tooltip>
    {/if}
    <div class="flex flex-col items-start">
      {#if item.href}
        <div>
          <Link href={item.href}>{item.caption}</Link>
          {#if item.captionSub && captionSubStyle === 'inline'}
            <span class="text-base-content/70 text-xs italic">{item.captionSub}</span>
          {/if}
        </div>
      {:else}
        <!-- 20 is a cool value ! -->
        <span
          class="text-base-content {item.class} {(item.caption ?? '').length < 20
            ? 'text-nowrap'
            : ''}"
        >
          {item.caption ?? '-'}
        </span>
      {/if}
      {#if item.captionSub && captionSubStyle === 'under'}
        <span class="text-base-content/70 text-xs italic">{item.captionSub}</span>
      {/if}
    </div>
  {/if}
</div>
