<?php Namespace Ryanvade\AvatarBaseURLRemove;

use Flarum\Event\ConfigureClientView;
use Illuminate\Contracts\Events\Dispatcher;
class AddClientAssets {
	/**
	 * @param Dispatcher $events
	 */
	public function subscribe( Dispatcher $events ) {
		$events->listen( ConfigureClientView::class, [ $this, 'addAssets' ] );
	}
	/**
	 * @param ConfigureClientView $event
	 */
	public function addAssets( ConfigureClientView $event ) {
		if ( $event->isForum() ) {
			$event->addAssets( [
				__DIR__ . '/../../js/forum/dist/extension.js'
			] );
			$event->addBootstrapper( 'ryanvade/flarum-ext-remove-avatar-baseurl/main' );
		}
	}
}